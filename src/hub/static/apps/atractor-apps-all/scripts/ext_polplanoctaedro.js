//MAIN
//standard global variables
var container, scene, camera, renderer, controls;
//custom global variables
var mesh;
var cameraOrtho, sceneOrtho;
var spriteBR;
var mapC;
RangeVal=0;	
var polyhedronMesh2;
range.oninput = function() {
    var tt = this.value;
	if(S3PPre=="pol2p") displayPolyhedron(tt); else displayPolyhedron(199-tt);
}
range.onchange = function() {
	var tt = this.value;
	if(S3PPre=="pol2p") displayPolyhedron(tt); else displayPolyhedron(199-tt);
}
function init(DataPols) {
if (typeof DataPols == 'undefined') DataPols=anim;
var width0=parseInt(WW);
var height0=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var width=width0;
var height=Math.min(width0/2,height0);
var width2=width;
var height2=height;
var loader = new THREE.TextureLoader();
loader.load('../atractor-apps-all/imgs/symm-bg2-02.jpg' , 
function(texture)
            {
             scene.background = texture;  
            });
scene=new THREE.Scene();
//scene.fog=new THREE.Fog(0x000000,1500,2100);
sceneOrtho=new THREE.Scene();
var view_angle=25, aspect=width/height, near=0.1, far=2000;
camera=new THREE.PerspectiveCamera(view_angle,aspect,near,far);
camera.position.set(5,3,2);
camera.lookAt(new THREE.Vector3(0,0,0));
camera.up.set(0,-1,0);
scene.add(camera);
cameraOrtho=new THREE.OrthographicCamera(-width2/2,width2/2,height2/2,-height2/2,1,10);
cameraOrtho.position.z=6;
sceneOrtho.add(cameraOrtho);
//create sprites 

//renderer 
if (Detector.webgl) 
renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
else 
renderer=new THREE.CanvasRenderer();
renderer.autoClear=false;
renderer.setSize(width,height);
renderer.setClearColor(0xf3f1cd,1);
controls=new THREE.TrackballControls(camera,renderer.domElement);
controls.noPan=true;
container=document.getElementById('ThreeJS');
container.appendChild(renderer.domElement);
window.addEventListener('resize',OnResize,true);
//LIGHT 
var light = new THREE.PointLight(0xffffff);
light.position.set(-25,25,50);
camera.add(light);
var lighta = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( lighta );
this.polyhedronMesh = new THREE.Object3D(); 
if(S3PPre=="pol2p") polyhedronMesh = polyhedronDataToMesh(RangeVal,DataPols); else polyhedronMesh = polyhedronDataToMesh(199-RangeVal,DataPols);
scene.add(polyhedronMesh);}

var faces;
function polyhedronDataToMesh(j,data)
{
var polyhedron = new THREE.Object3D();
var opac= 0.85;
// convert vertex data to THREE.js vectors
var vertex = [] 
for (var i = 0; i < data.vertex[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex[j][i][1], data.vertex[j][i][2], data.vertex[j][i][0] ).multiplyScalar(1) );
// draw edge 
var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge.length; i++)
{
var index0 = data.edge[i][0];
var index1 = data.edge[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.009);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
polyhedron.add( edgeMesh );

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 4; faceNum < data.face.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face[faceNum][0], data.face[faceNum][i+1], data.face[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: opac} );
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
polyhedron.add( interiorFaces );
polyhedron.add( faces );
return polyhedron;
}





function animate() {requestAnimationFrame(animate);
render();
//
}

function render(DataPols) {
	if (typeof DataPols == 'undefined') DataPols=anim;
	if(isRotating)
    { RangeVal += 0.4;
	    document.getElementById('range').value =Math.floor(Math.min(RangeVal,199))%200;
		
		displayPolyhedron(199-Math.floor(Math.min(RangeVal,199))%200,DataPols);
	   
	   
	   if(RangeVal>199) {
		 scene.remove(polyhedronMesh) 
		 scene.remove(polyhedronMesh2)  
if(RangeVal<250) 
{polyhedronMesh2 = polyhedronDataToMesh2((Math.floor(Math.min(RangeVal,250))-199)%200,DataPols);
}
else
{ if(RangeVal<300) {polyhedronMesh2 = polyhedronDataToMesh2((300-Math.floor(Math.min(RangeVal,300)))%200,DataPols);
} else {polyhedronMesh2 = polyhedronDataToMesh2((Math.floor(Math.min(RangeVal,330))-299)%200,DataPols)}};

		scene.add(polyhedronMesh2);
		   
		if(RangeVal>330) {
		   isRotating=false;
	   document.getElementById("imgbt").src ="../atractor-apps-all/icons/play.png"
		RangeVal=0}
	   }
    }
tt0=document.getElementById('range').value;
if(tt0<199) displayPolyhedron(199-tt0,DataPols);
				renderer.clear();renderer.render( sceneOrtho, cameraOrtho );
				renderer.render( scene, camera );
				//renderer.clearDepth();
				
				controls.update();		
			}
			
function displayPolyhedron(j,data)
{if (typeof data == 'undefined') data=anim;
	var width0=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height0=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var width=width0;
var height=Math.min(width0/2,height0);
	scene.remove(polyhedronMesh);
	polyhedronMesh = polyhedronDataToMesh(j,data);
	/*camera.position.set(data.camera[j][1],data.camera[j][2],data.camera[j][0]);*/
	//camera.up.set(data.vertical[j][1],-data.vertical[j][2],data.vertical[j][0]);
	//camera.lookAt(new THREE.Vector3(0,-.5,0));
	var yy = [] 
	for (var i = 0; i < data.vertex[j].length; i++)
		yy.push( Math.sqrt(Math.pow(data.vertex[j][i][1],2)+Math.pow(data.vertex[j][i][2],2) ));
		var maxyy=yy.reduce(function(a, b) {
  return Math.max(a, b);
});
		var fovr=Math.atan(maxyy/(Math.sqrt(Math.pow(data.camera[j][0],2)+Math.pow(data.camera[j][1],2)+Math.pow(data.camera[j][2],2))-maxyy))*2*(180/Math.PI);
		var k=1.15* Math.tan(fovr* Math.PI/180)/Math.tan(20* Math.PI/180);
		//camera.position.set(k*data.camera[j][1],k*data.camera[j][2],k*data.camera[j][0]);
		
		//camera.updateProjectionMatrix();
	scene.add(polyhedronMesh);
}			
			

var isRotating=true
function pauseRotation()
{var str=imgbt.src;
var str0=str.substring(str.length-9,str.length);
	if(str0=="pause.png") 
{isRotating=false;
 document.getElementById("imgbt").src ="../atractor-apps-all/icons/play.png"} 
else 
{scene.remove(polyhedronMesh) 
		 scene.remove(polyhedronMesh2)  
		 isRotating=true;
document.getElementById("imgbt").src ="../atractor-apps-all/icons/pause.png"};}


function OnResize()
{var width0=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height0=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var width=width0;
var height=Math.min(width0/2,height0);
var width2=width;
var height2=height;
camera.aspect=width/height;
camera.updateProjectionMatrix();
renderer.setSize(width,height);
cameraOrtho.left=-width2/2;
cameraOrtho.right=width2/2;
cameraOrtho.top=height2/2;
cameraOrtho.bottom=-height2/2;
cameraOrtho.updateProjectionMatrix();
}




function polyhedronDataToMesh2(j,data)
{
var polyhedron = new THREE.Object3D();
var opac= 0.85;
// convert vertex data to THREE.js vectors
var vertex = [] 
for (var i = 0; i < data.vertex2[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex2[j][i][1], data.vertex2[j][i][2], data.vertex2[j][i][0] ).multiplyScalar(1) );
// draw edge 


var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge2.length; i++)
{
var index0 = data.edge2[i][0];
var index1 = data.edge2[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.009);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
polyhedron.add( edgeMesh );


// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face2.length; faceNum++)
{
for (var i = 0; i < data.face2[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face2[faceNum][0], data.face2[faceNum][i+1], data.face2[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: opac} );
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
polyhedron.add( interiorFaces );
polyhedron.add( faces );
return polyhedron;
}

function cylinderMesh(point1, point2, material,k)
{
var direction = new THREE.Vector3().subVectors(point2, point1);
var orientation = new THREE.Matrix4();
orientation.lookAt(point1, point2, new THREE.Object3D().up);
orientation.multiply(new THREE.Matrix4().set(1, 0, 0, 0,
                0, 0, 1, 0,
                0, -1, 0, 0,
                0, 0, 0, 1));
    var edgeGeometry = new THREE.CylinderGeometry( k,k, direction.length(),4, 2 );
    var edge = new THREE.Mesh(edgeGeometry, material); 
 edge.applyMatrix(orientation);
 edge.position.x = (point2.x + point1.x) / 2;
     edge.position.y = (point2.y + point1.y) / 2;
     edge.position.z = (point2.z + point1.z) / 2;
return edge;
}
