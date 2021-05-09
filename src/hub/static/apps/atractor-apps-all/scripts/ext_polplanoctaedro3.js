//MAIN
//standard global variables
	function myFunction(image){
    var img = new Image();
    img.src = image;
    img.onload = function() {   
         a=this.width/this.height;
		 return a
        
}}
var imgname = "../atractor-apps-all/imgs/text_mesaq.png";
var a = myFunction(imgname)


var container, scene, camera, renderer, controls;
//custom global variables
var mesh;
var cameraOrtho, sceneOrtho;
var spriteBR;
var mapC;
RangeVal=0;	
var polyhedronMesh2,polyhedronMesh3, polyhedronMesh4;
var material;
function init(DataPols) {
	
	material = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load(imgname) ,side: THREE.DoubleSide} );

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
camera.position.set(6,3,0);
camera.lookAt(new THREE.Vector3(0,0,0));
camera.up.set( 0.57735,0.57735,-0.57735);
scene.add(camera);
cameraOrtho=new THREE.OrthographicCamera(-width2/2,width2/2,height2/2,-height2/2,1,10);
cameraOrtho.position.z=6;
sceneOrtho.add(cameraOrtho);
//create sprites 

var geometry = new THREE.PlaneGeometry( 2,2, 32 );
//var material = new THREE.MeshBasicMaterial( {color: 0xd2b48c, side: THREE.FrontSide} );



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
var light2 = new THREE.PointLight(0xffffff);
light2.position.set(25,-25,-50);
camera.add(light2);
var lighta = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( lighta );
this.polyhedronMesh = new THREE.Object3D(); 
if(S3PPre=="pol2p") polyhedronMesh = polyhedronDataToMesh(RangeVal,DataPols); else polyhedronMesh = polyhedronDataToMesh(199-RangeVal,DataPols);
scene.add(polyhedronMesh);}

var faces;
function polyhedronDataToMesh(j,data,opaci)
{
var polyhedron = new THREE.Object3D();
var opac= Math.min(opaci,0.85);
// convert vertex data to THREE.js vectors
var vertex = [] 
for (var i = 0; i < data.vertex[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex[j][i][1], data.vertex[j][i][2], data.vertex[j][i][0] ).multiplyScalar(1) );
// draw edge 
var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520,
transparent:true, opacity: opaci} );
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
for (var faceNum = 0; faceNum < 2; faceNum++)
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
//polyhedron.add( interiorFaces );
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
		 scene.remove(polyhedronMesh) 
		 scene.remove(polyhedronMesh2)  
		polyhedronMesh2 = polyhedronDataToMesh2(0,DataPols,RangeVal)
		
		
		scene.add(polyhedronMesh2);
				 
		
	
		/*if(RangeVal>330) {
		   isRotating=false;
	   document.getElementById("imgbt").src ="../atractor-apps-all/icons/play.png"
		RangeVal=0}*/
	   }
    
tt0=document.getElementById('range').value;
				renderer.clear();
				renderer.render( scene, camera );
				//renderer.clearDepth();
				
				controls.update();		
				controls.enabled = false;
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
 scene.remove(polyhedronMesh3) 		 
		  scene.remove(polyhedronMesh4) 
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




function polyhedronDataToMesh2(j,data, fase)
{
var polyhedron = new THREE.Object3D();


var geometry = new THREE.PlaneBufferGeometry( 2, 2, 32, 32 );

var plane = new THREE.Mesh( geometry, material );
//plane.rotation.x=Math.PI/2;
plane.rotation.y=5*Math.PI/4;
plane.translateY(-0.433)
plane.rotation.x=2*Math.PI/3;
//plane.rotation.z=-2*Math.PI/3;
//plane.rotation.y=Math.PI/2;
plane.receiveShadow = true;
//polyhedron.add( plane );


var dir = new THREE.Vector3( 0.57735, -0.57735,-0.57735);
var centroid = new THREE.Vector3(0.235667, -0.24,-0.235667);
var plane = new THREE.Plane();
plane.setFromNormalAndCoplanarPoint(dir, centroid).normalize();

// Create a basic rectangle geometry
var planeGeometry = new THREE.PlaneGeometry(3,3);

// Align the geometry to the plane
var coplanarPoint = plane.coplanarPoint();
var focalPoint = new THREE.Vector3().copy(coplanarPoint).add(plane.normal);
planeGeometry.lookAt(focalPoint);
planeGeometry.translate(coplanarPoint.x, coplanarPoint.y, coplanarPoint.z);

// Create mesh with the geometry
var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffff00, side: THREE.FrontSide});
var dispPlane = new THREE.Mesh(planeGeometry, material);
polyhedron.add(dispPlane);


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
side: THREE.FrontSide, transparent:true, opacity: .85 } );
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



if(fase > 30)
	
	{var vertex = [] 
for (var i = 0; i < data.vertex[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex[j][i][1], data.vertex[j][i][2], data.vertex[j][i][0] ).multiplyScalar(1) );
// draw edge 
var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge.length; i++)
{
var index0 = data.edge[i][0];
var index1 = data.edge[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.009);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=2-2*Math.min((fase-30)/100,1);
polyhedron.add( edgeMesh );

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < 2; faceNum++)
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
faces.position.y=2-2*Math.min((fase-30)/100,1);
interiorFaces.position.y=2-2*Math.min((fase-30)/100,1);

polyhedron.add( faces );}

if(fase>130)
	
	{var vertex = [];
for (var i = 0; i < data.vertex[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex[j][i][1], data.vertex[j][i][2], data.vertex[j][i][0] ).multiplyScalar(1) );
// draw edge 
var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge3.length; i++)
{
var index0 = data.edge3[i][0];
var index1 = data.edge3[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.009);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=2-2*Math.min((fase-130)/100,1);

polyhedron.add( edgeMesh );

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 2; faceNum < 3; faceNum++)
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
transparent:true, opacity: .85} );
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.y=2-2*Math.min((fase-130)/100,1);
interiorFaces.position.y=2-2*Math.min((fase-130)/100,1);

polyhedron.add( interiorFaces );
polyhedron.add( faces );}

if(fase>230)
{var vertex = [] 
for (var i = 0; i < data.vertex[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex[j][i][1], data.vertex[j][i][2], data.vertex[j][i][0] ).multiplyScalar(1) );
// draw edge 
var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge4.length; i++)
{
var index0 = data.edge4[i][0];
var index1 = data.edge4[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.009);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=2-2*Math.min((fase-230)/100,1);

polyhedron.add( edgeMesh );

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 3; faceNum < 4; faceNum++)
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
faces.position.y=2-2*Math.min((fase-230)/100,1);
interiorFaces.position.y=2-2*Math.min((fase-230)/100,1);

polyhedron.add( interiorFaces );
polyhedron.add( faces );

}
polyhedron.rotation.y = 5*Math.PI/4;
polyhedron.rotateOnAxis(dir,-fase/2000*Math.PI);
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
