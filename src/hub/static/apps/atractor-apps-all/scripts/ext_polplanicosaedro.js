//MAIN
	function myFunction(image){
    var img = new Image();
    img.src = image;
    img.onload = function() {   
         a=this.width/this.height;
		 return a
        
}}
var imgname = "../atractor-apps-all/imgs/text_mesa2.png";
var a = myFunction(imgname)

//standard global variables
var container, scene, camera, renderer, controls;
//custom global variables
var mesh;
var cameraOrtho, sceneOrtho;
var spriteBR;var material;
var mapC;
RangeVal=0;	
var polyhedronMesh2,polyhedronMesh3, polyhedronMesh4, polyhedronMesh5,
polyhedronMesh6, polyhedronMesh7, polyhedronMesh8, polyhedronMesh9
, polyhedronMesh10;
range.oninput = function() {
    var tt = this.value;
	if(S3PPre=="pol2p") displayPolyhedron(tt); else displayPolyhedron(199-tt);
}
range.onchange = function() {
	var tt = this.value;
	if(S3PPre=="pol2p") displayPolyhedron(tt); else displayPolyhedron(199-tt);
}
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

camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(20,-10,0);
camera.up.set(0,-1,0)
scene.add(camera);



cameraOrtho=new THREE.OrthographicCamera(-width2/2,width2/2,height2/2,-height2/2,1,10);
cameraOrtho.position.z=6;
sceneOrtho.add(cameraOrtho);
//create sprites 

var geometry = new THREE.PlaneGeometry( 2,2, 32 );



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
/*
var light = new THREE.PointLight(0xffffff,.8);
light.position.set(-25,25,40);
camera.add(light);
var light2 = new THREE.PointLight(0xffffff,.7);
light2.position.set(25,-25,-40);
camera.add(light2);
var light3 = new THREE.PointLight(0xffffff,.5);
light3.position.set(-25,-25,-20);
camera.add(light3);
var light4 = new THREE.PointLight(0xffffff,.7);
light4.position.set(25,25,-40);
camera.add(light4);
var lighta = new THREE.AmbientLight( 0x606060 ); // soft white light
scene.add( lighta );
*/
var light = new THREE.PointLight(0xffffff,.25);
light.position.set(-25,35,120);
camera.add(light);
var light2 = new THREE.PointLight(0xffffff,.25);
light2.position.set(20,20,-20);
camera.add(light2);
var light3 = new THREE.PointLight(0xffffff,.5);
light3.position.set(20,-20,-20);
camera.add(light3);
var light4 = new THREE.PointLight(0xffffff,.25);
light4.position.set(-5,-20,120);
camera.add(light4);

var lighta = new THREE.AmbientLight( 0xffffff ,.4); // soft white light
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
transparent:true, opacity: Math.max(opac,.4)} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge.length; i++)
{
var index0 = data.edge[i][0];
var index1 = data.edge[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
polyhedron.add( edgeMesh );

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
//faceMaterial.depthWrite = false;
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
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: opac} );
////interiorMaterial.depthWrite = false;
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
		 scene.remove(polyhedronMesh)  
		 scene.remove(polyhedronMesh2)  
		polyhedronMesh2 = polyhedronDataToMesh2(0,DataPols,RangeVal)
		
		scene.add(polyhedronMesh2);
			//polyhedronMesh2.rotation.y = 5*Math.PI/4;

	/*if(RangeVal>930) {
		   isRotating=false;
	   document.getElementById("imgbt").src ="../atractor-apps-all/icons/play.png"
		RangeVal=0}*/
	   }
    
tt0=document.getElementById('range').value;
				renderer.clear();renderer.render( sceneOrtho, cameraOrtho );
				renderer.render( scene, camera );
				
				renderer.clearDepth();
				renderer.sortObjects = false
				controls.update();		
				controls.enabled = false;
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




function polyhedronDataToMesh2(j,data,fase)
{
var polyhedron = new THREE.Object3D();

var geometry = new THREE.PlaneBufferGeometry( 3, 5, 32, 32 );

var plane = new THREE.Mesh( geometry, material );
plane.rotation.x=Math.PI/2;
//plane.rotation.y=Math.PI/2;
plane.position.y=0.77;
plane.receiveShadow = true;
polyhedron.add( plane );


var opac= .85;
// convert vertex data to THREE.js vectors
var vertex = [] 
for (var i = 0; i < data.vertex[j].length; i++)
vertex.push( new THREE.Vector3( data.vertex[j][i][1], data.vertex[j][i][2], data.vertex[j][i][0] ).multiplyScalar(1) );
// draw edge 


var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge.length; i++)
{
var index0 = data.edge[i][0];
var index1 = data.edge[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
polyhedron.add( edgeMesh );

if(fase>30) {var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity:.85} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge2.length; i++)
{
var index0 = data.edge2[i][0];
var index1 = data.edge2[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-30)/100,1);

polyhedron.add( edgeMesh );}

if(fase>130) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity: Math.max(0.4,Math.min((fase-100)/100,.85))} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge3.length; i++)
{
var index0 = data.edge3[i][0];
var index1 = data.edge3[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=2-2*Math.min((fase-130)/100,1);

polyhedron.add( edgeMesh );}



if(fase>230) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity:.85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge4.length; i++)
{
var index0 = data.edge4[i][0];
var index1 = data.edge4[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.z=-2+2*Math.min((fase-230)/100,1);

polyhedron.add( edgeMesh );}

if(fase>330) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge5.length; i++)
{
var index0 = data.edge5[i][0];
var index1 = data.edge5[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=-2+2*Math.min((fase-330)/100,1);
polyhedron.add( edgeMesh );}

if(fase>430) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity:.85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge6.length; i++)
{
var index0 = data.edge6[i][0];
var index1 = data.edge6[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=-2+2*Math.min((fase-430)/100,1);
polyhedron.add( edgeMesh );}


if(fase>530) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge7.length; i++)
{
var index0 = data.edge7[i][0];
var index1 = data.edge7[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-530)/100,1);

polyhedron.add( edgeMesh );}


if(fase>630) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge8.length; i++)
{
var index0 = data.edge8[i][0];
var index1 = data.edge8[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-630)/100,1);
polyhedron.add( edgeMesh );}


if(fase>730) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge9.length; i++)
{
var index0 = data.edge9[i][0];
var index1 = data.edge9[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );

edgeMesh.position.y=-2+2*Math.min((fase-730)/100,1);
polyhedron.add( edgeMesh );}



if(fase>830) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520,
transparent:true, opacity: .85} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge10.length; i++)
{
var index0 = data.edge10[i][0];
var index1 = data.edge10[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.012);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-830)/100,1);
polyhedron.add( edgeMesh );}

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < 5; faceNum++)
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
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: opac} );
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
polyhedron.add( interiorFaces );
polyhedron.add( faces );


if(fase>30)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
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
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
////interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.y=-2+2*Math.min((fase-30)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-30)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;


polyhedron.add( interiorFaces );
polyhedron.add( faces );}

if(fase>130)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face3.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face3[faceNum][0], data.face3[faceNum][i+1], data.face3[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
interiorFaces.position.x=2-2*Math.min((fase-130)/100,1);
faces.position.x=2-2*Math.min((fase-130)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}



if(fase>230)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face4.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face4[faceNum][0], data.face4[faceNum][i+1], data.face4[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity:.85} );
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.z=-2+2*Math.min((fase-230)/100,1);
interiorFaces.position.z=-2+2*Math.min((fase-230)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>330)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity:.85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face5.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face5[faceNum][0], data.face5[faceNum][i+1], data.face5[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.x=-2+2*Math.min((fase-330)/100,1);
interiorFaces.position.x=-2+2*Math.min((fase-330)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>430)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face6.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face6[faceNum][0], data.face6[faceNum][i+1], data.face6[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.x=-2+2*Math.min((fase-430)/100,1);
interiorFaces.position.x=-2+2*Math.min((fase-430)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>530)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity:.85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face7.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face7[faceNum][0], data.face7[faceNum][i+1], data.face7[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
//interiorMaterial.depthWrite = false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.y=-2+2*Math.min((fase-530)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-530)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}



if(fase>630)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face8.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face8[faceNum][0], data.face8[faceNum][i+1], data.face8[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.y=-2+2*Math.min((fase-630)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-630)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>730)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity:.85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face9.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face9[faceNum][0], data.face9[faceNum][i+1], data.face9[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
//interiorMaterial.depthWrite = false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.y=-2+2*Math.min((fase-730)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-730)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>830)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face10.length; faceNum++)
{
for (var i = 0; i < data.face[faceNum].length - 2; i++)
{
geometry.faces[faceIndex] = new THREE.Face3( data.face10[faceNum][0], data.face10[faceNum][i+1], data.face10[faceNum][i+2] );
geometry.faces[faceIndex].color = new THREE.Color(data.facecolors[faceNum]);
faceIndex++;
}
}
geometry.computeFaceNormals();
geometry.computeVertexNormals();
faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
//interiorMaterial.depthWrite = false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);

faces.position.y=-2+2*Math.min((fase-830)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-830)/100,1);
faceMaterial.needsUpdate=true; faceMaterial.perPixel=false;
interiorMaterial.needsUpdate=true; interiorMaterial.perPixel=true;

polyhedron.add( interiorFaces );
polyhedron.add( faces );}


//polyhedron.rotateOnAxis ( new THREE.Vector3(0.566555, 0.218036, 0.794654), fase/2000*Math.PI);
polyhedron.rotation.y=5*Math.PI/4-fase/1900*Math.PI;

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
