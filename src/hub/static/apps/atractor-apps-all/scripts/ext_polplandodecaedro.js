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
var material;

RangeVal=0;	
var polyhedronMesh2;

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



camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(20,-10,0);
camera.up.set(0,-1,0)
scene.add(camera);
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
var lighta = new THREE.AmbientLight( 0x808080 ); // soft white light
scene.add( lighta );
/*
var ambient = new THREE.AmbientLight( 0xfcfcfc, .7 );
				//scene.add( ambient );



				spotLight = new THREE.SpotLight( 0xffffff, .7 );
				spotLight.position.set( -16, -16, 12 );
				spotLight.angle = Math.PI / 4;
				spotLight.penumbra = 0.1;
				spotLight.decay = 2;
				spotLight.distance = 200;

				spotLight.castShadow = true;
				spotLight.shadow.mapSize.width = 1024;
				spotLight.shadow.mapSize.height = 1024;
				spotLight.shadow.camera.near = .1;
				spotLight.shadow.camera.far = 2000;
				spotLight.shadow.focus = 1;
				scene.add( spotLight );


				lightHelper = new THREE.SpotLightHelper( spotLight );
				//scene.add( lightHelper );

				shadowCameraHelper = new THREE.CameraHelper( spotLight.shadow.camera );
				//scene.add( shadowCameraHelper );
*/

this.polyhedronMesh = new THREE.Object3D(); 
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
		  
		  



		 scene.remove(polyhedronMesh2)  
		polyhedronMesh2 = polyhedronDataToMesh2(0,DataPols,RangeVal)
		
		scene.add(polyhedronMesh2);
			//polyhedronMesh2.rotation.x = 1.1*Math.PI;
//polyhedronMesh2.rotation.y = Math.PI/4;

	/*if(RangeVal>1100) {
		   isRotating=false;
	   document.getElementById("imgbt").src ="../atractor-apps-all/icons/play.png"
		RangeVal=0}*/
	   }
    
tt0=document.getElementById('range').value;
				renderer.clear();
				
				renderer.render( scene, camera );
				

				//renderer.clearDepth();
				//renderer.sortObjects = false
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

}




function polyhedronDataToMesh2(j,data,fase)
{
var polyhedron = new THREE.Object3D();

var geometry = new THREE.PlaneBufferGeometry( 3, 5, 32, 32 );

var plane = new THREE.Mesh( geometry, material );
plane.rotation.x=Math.PI/2;
//plane.rotation.y=Math.PI/2;
plane.position.y=1.13;
plane.receiveShadow = true;
polyhedron.add( plane );

var geometry = new THREE.PlaneBufferGeometry( 3, 5, 32, 32 );

var plane = new THREE.Mesh( geometry, material );
plane.rotation.x=Math.PI/2;
//plane.rotation.y=Math.PI/2;
plane.position.y=1.131;
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
for (var i = 0; i < data.edge2.length; i++)
{
var index0 = data.edge2[i][0];
var index1 = data.edge2[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );

polyhedron.add( edgeMesh );

if(fase>30) {var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge.length; i++)
{
var index0 = data.edge[i][0];
var index1 = data.edge[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=-2+2*Math.min((fase-30)/100,1);
edgeMesh.castShadow = true; //default is false
//edgeMesh.receiveShadow = true; //default
polyhedron.add( edgeMesh );}

if(fase>130) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge3.length; i++)
{
var index0 = data.edge3[i][0];
var index1 = data.edge3[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.z=-2+2*Math.min((fase-130)/100,1);

polyhedron.add( edgeMesh );}


if(fase>230) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge4.length; i++)
{
var index0 = data.edge4[i][0];
var index1 = data.edge4[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=2-2*Math.min((fase-230)/100,1);

polyhedron.add( edgeMesh );}

if(fase>360) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge5.length; i++)
{
var index0 = data.edge5[i][0];
var index1 = data.edge5[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-360)/100,1);

polyhedron.add( edgeMesh );}

if(fase>460) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge6.length; i++)
{
var index0 = data.edge6[i][0];
var index1 = data.edge6[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-460)/100,1);

polyhedron.add( edgeMesh );}


if(fase>560) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge7.length; i++)
{
var index0 = data.edge7[i][0];
var index1 = data.edge7[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=2-2*Math.min((fase-560)/100,1);

polyhedron.add( edgeMesh );}


if(fase>690) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge8.length; i++)
{
var index0 = data.edge8[i][0];
var index1 = data.edge8[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-690)/100,1);

polyhedron.add( edgeMesh );}


if(fase>790) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge9.length; i++)
{
var index0 = data.edge9[i][0];
var index1 = data.edge9[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.x=2-2*Math.min((fase-790)/100,1);

polyhedron.add( edgeMesh );}



if(fase>890) 
{var edgeMaterial = new THREE.MeshPhongMaterial( {color:0xdaa520} );

var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge10.length; i++)
{
var index0 = data.edge10[i][0];
var index1 = data.edge10[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.015);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
edgeMesh.position.y=-2+2*Math.min((fase-890)/100,1);

polyhedron.add( edgeMesh );}

// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
//faceMaterial.depthWrite = false;
var geometry = new THREE.Geometry();
geometry.vertices = vertex;
var faceIndex = 0;
for (var faceNum = 0; faceNum < 3; faceNum++)
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
var faces = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: opac} );
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
//faces.castShadow = true; //default is false
//faces.receiveShadow = true; //default
interiorFaces.castShadow = true; //default is false
interiorFaces.receiveShadow = true; //default
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
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
var faces100 = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
////interiorMaterial.depthWrite = false;
var interiorFaces100 = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces100.position.x=-2+2*Math.min((fase-30)/100,1);
interiorFaces100.position.x=-2+2*Math.min((fase-30)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces100 );
polyhedron.add( faces100 );}

if(fase>130)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity:.85 } );
//faceMaterial.depthWrite = false;
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
var faces200 = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
//interiorMaterial.depthWrite = false;
var interiorFaces200 = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces200.position.z=-2+2*Math.min((fase-130)/100,1);
interiorFaces200.position.z=-2+2*Math.min((fase-130)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces200 );
polyhedron.add( faces200 );
}
/*



}
*/


if(fase>230)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85} );
//faceMaterial.depthWrite = false;
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
var faces300 = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
//interiorMaterial.depthWrite = false;
var interiorFaces300 = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces300.position.x=2-2*Math.min((fase-230)/100,1);
interiorFaces300.position.x=2-2*Math.min((fase-230)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces300 );
polyhedron.add( faces300 );}


if(fase>360)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
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
var faces400 = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity: .85} );
//interiorMaterial.depthWrite = false;
var interiorFaces400 = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);

faces400.position.y=-2+2*Math.min((fase-360)/100,1);
interiorFaces400.position.y=-2+2*Math.min((fase-360)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces400 );
polyhedron.add( faces400 );}


if(fase>460)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
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
var faces500 = new THREE.Mesh(geometry, faceMaterial);
//faces.scale.multiplyScalar(1.01);
var interiorMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide,
transparent:true, opacity:.85} );
//interiorMaterial.depthWrite = false;
var interiorFaces500 = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);

faces500.position.y=-2+2*Math.min((fase-460)/100,1);
interiorFaces500.position.y=-2+2*Math.min((fase-460)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces500 );
polyhedron.add( faces500 );}


if(fase>560)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
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
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);

faces.position.x=2-2*Math.min((fase-560)/100,1);
interiorFaces.position.x=2-2*Math.min((fase-560)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces );
polyhedron.add( faces );}



if(fase>690)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
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
transparent:true, opacity:.85} );
//interiorMaterial.depthWrite = false;
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);

faces.position.y=-2+2*Math.min((fase-690)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-690)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>790)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity:.85 } );
//faceMaterial.depthWrite = false;
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
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);
faces.position.x=2-2*Math.min((fase-790)/100,1);
interiorFaces.position.x=2-2*Math.min((fase-790)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces );
polyhedron.add( faces );}


if(fase>890)
{var faceMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: .85 } );
//faceMaterial.depthWrite = false;
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
var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
//interiorFaces.scale.multiplyScalar(0.99);

faces.position.y=-2+2*Math.min((fase-890)/100,1);
interiorFaces.position.y=-2+2*Math.min((fase-890)/100,1);
faceMaterial.needsUpdate=true; 
interiorMaterial.needsUpdate=true; 
polyhedron.add( interiorFaces );
polyhedron.add( faces );}

 
 polyhedron.rotation.y=-fase/2000*Math.PI;


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
