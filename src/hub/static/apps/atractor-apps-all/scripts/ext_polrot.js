//MAIN
//standard global variables
var container, scene, camera, renderer, controls;
if (typeof S3PPre == 'undefined') S3PPre="pol";
//custom global variables
var mesh;
var cameraOrtho, sceneOrtho;
var spriteBR;
var mapC; 
function init(DataPols) {
if (typeof DataPols == 'undefined') DataPols=pol;	
var width0=parseInt(WW);
var height0=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var width=width0;
if(S3PPre=="vplan")
{var height=.96*Math.min(width0/2,height0);}
else
{var height=.96*Math.min(width0,height0);};
var width2=width;
var height2=height;

var loader = new THREE.TextureLoader();
loader.load('../atractor-apps-all/imgs/symm-bg2-03.jpg' , 
function(texture)
            {
             scene.background = texture;  
            });
			
scene=new THREE.Scene();
//scene.fog=new THREE.Fog(0x000000,1500,2100);
sceneOrtho=new THREE.Scene();

if(S3PPre=="vplan")
{var yy = [] 
	for (var i = 0; i < DataPols.vertex.length; i++)
		yy.push( Math.sqrt(Math.pow(DataPols.vertex[i][0],2)+Math.pow(DataPols.vertex[i][1],2)+Math.pow(DataPols.vertex[i][2],2) ));
	var maxyy=yy.reduce(function(a, b) {
  return Math.max(a, b);
});
		var view_angle=Math.atan(maxyy/(Math.sqrt(Math.pow(DataPols.camera[0],2)+Math.pow(DataPols.camera[1],2)+Math.pow(DataPols.camera[2],2))-maxyy))*2*(180/Math.PI);
		}
else
{var view_angle=DataPols.pov};
var aspect=width/height, near=0.1, far=2000;
camera=new THREE.PerspectiveCamera(view_angle,aspect,near,far);
camera.position.set(DataPols.camera[1],DataPols.camera[2],DataPols.camera[0]);
camera.lookAt(new THREE.Vector3(0,0,0));
scene.add(camera);
cameraOrtho=new THREE.OrthographicCamera(-width2/2,width2/2,height2/2,-height2/2,1,10);
cameraOrtho.position.z=10;
sceneOrtho.add(cameraOrtho);

//renderer 
if (Detector.webgl) 
renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
else 
renderer=new THREE.CanvasRenderer();
renderer.autoClear=false;
renderer.setSize(width,height);
renderer.setClearColor(0xf3f1cd,1);
container=document.getElementById('ThreeJS');
container.appendChild(renderer.domElement);
window.addEventListener('resize',OnResize,false);
if(S3PPre=="pol") 
{controls=new THREE.TrackballControls(camera,renderer.domElement);
controls.noPan=true;};
//LIGHT 
var light = new THREE.PointLight(0xffffff);
light.position.set(-25,25,50);
camera.add(light);
var light2 = new THREE.PointLight(0xffffff);
light2.position.set(20,20,0);
//camera.add(light2);
this.polyhedronMesh = new THREE.Object3D(); 
polyhedronMesh = polyhedronDataToMesh(DataPols)
scene.add(polyhedronMesh);}

var faces;
function polyhedronDataToMesh(data)
{
var polyhedron = new THREE.Object3D();
if(data.type==="convex"||S3PPre=="vplan") 
{var opac= 0.85} 
else 
{var opac=  0.96}; 
if(S3PPre=="vplan") {var kk=.2} else {var kk=1};
// convert vertex data to THREE.js vectors
var vertex = [] 
for (var i = 0; i < data.vertex.length; i++)
vertex.push( new THREE.Vector3( data.vertex[i][1], data.vertex[i][2], data.vertex[i][0] ).multiplyScalar(1) );
if(data.vertexf==undefined)
{var vertexf = vertex}
else
{var vertexf = []; 
for (var i = 0; i < data.vertexf.length; i++)
vertexf.push( new THREE.Vector3( data.vertexf[i][1], data.vertexf[i][2], data.vertexf[i][0] ).multiplyScalar(1) );
};
var vertexGeometry = new THREE.SphereGeometry( 0.004*kk*data.camera[2], 20, 20 );
var vertexMaterial = new THREE.MeshLambertMaterial( { color: 0xc0c0c0 } );
var vertexSingleMesh = new THREE.Mesh( vertexGeometry );
var vertexAmalgam = new THREE.Geometry();
for (var i = 0; i < data.vertex.length; i++)
{if(i!=17&&i!=21){
vertexSingleMesh.position.set(vertex[i].getComponent(0),vertex[i].getComponent(1),vertex[i].getComponent(2));
THREE.GeometryUtils.merge( vertexAmalgam, vertexSingleMesh );
}}
var vertexMesh = new THREE.Mesh( vertexAmalgam, vertexMaterial );
polyhedron.add( vertexMesh );






var vertexGeometry = new THREE.SphereGeometry( 0.008*kk*data.camera[2], 20, 20 );
var vertexMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
var vertexSingleMesh = new THREE.Mesh( vertexGeometry );
var vertexAmalgam = new THREE.Geometry();
for (var i = 0; i < data.vertex.length; i++)
{if(i==17){
vertexSingleMesh.position.set(vertex[i].getComponent(0),vertex[i].getComponent(1),vertex[i].getComponent(2));
THREE.GeometryUtils.merge( vertexAmalgam, vertexSingleMesh );
}}
var vertexMesh = new THREE.Mesh( vertexAmalgam, vertexMaterial );
polyhedron.add( vertexMesh );





var vertexGeometry = new THREE.SphereGeometry( 0.008*kk*data.camera[2], 20, 20 );
var vertexMaterial = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
var vertexSingleMesh = new THREE.Mesh( vertexGeometry );
var vertexAmalgam = new THREE.Geometry();
for (var i = 0; i < data.vertex.length; i++)
{if(i==21){
vertexSingleMesh.position.set(vertex[i].getComponent(0),vertex[i].getComponent(1),vertex[i].getComponent(2));
THREE.GeometryUtils.merge( vertexAmalgam, vertexSingleMesh );
}}
var vertexMesh = new THREE.Mesh( vertexAmalgam, vertexMaterial );
polyhedron.add( vertexMesh );


// convert edge data to cylinders
var edgeMaterial = new THREE.MeshLambertMaterial( {color:0xdaa520} );
var edgeAmalgam = new THREE.Geometry();
for (var i = 0; i < data.edge.length; i++)
{
var index0 = data.edge[i][0];
var index1 = data.edge[i][1];
var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial,.003*kk*data.camera[2]);
THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
}
var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
polyhedron.add( edgeMesh );


if(data.edge2!=undefined)
{var edgeMaterial2 = new THREE.MeshLambertMaterial( {color:0xdaa520} );
var edgeAmalgam2 = new THREE.Geometry();
for (var i = 0; i < data.edge2.length; i++)
{
var index02 = data.edge2[i][0];
var index12 = data.edge2[i][1];
var eMesh2 = cylinderMesh( vertex[index02], vertex[index12], edgeMaterial,0.002*kk*data.camera[2]);
THREE.GeometryUtils.merge( edgeAmalgam2, eMesh2 );
}
var edgeMesh2 = new THREE.Mesh( edgeAmalgam2, edgeMaterial2 );
polyhedron.add( edgeMesh2 );}


// convert face data to a single (triangulated) geometry
var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors,
side: THREE.FrontSide, transparent:true, opacity: opac } );
var geometry = new THREE.Geometry();
geometry.vertices = vertexf;
var faceIndex = 0;
for (var faceNum = 0; faceNum < data.face.length; faceNum++)
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
function cylinderMesh(point1, point2, material,k)
{
var direction = new THREE.Vector3().subVectors(point2, point1);
var orientation = new THREE.Matrix4();
orientation.lookAt(point1, point2, new THREE.Object3D().up);
orientation.multiply(new THREE.Matrix4().set(1, 0, 0, 0,
                0, 0, 1, 0,
                0, -1, 0, 0,
                0, 0, 0, 1));
    var edgeGeometry = new THREE.CylinderGeometry( k,k, direction.length(),10, 2 );
    var edge = new THREE.Mesh(edgeGeometry, material); 
 edge.applyMatrix(orientation);
 edge.position.x = (point2.x + point1.x) / 2;
     edge.position.y = (point2.y + point1.y) / 2;
     edge.position.z = (point2.z + point1.z) / 2;
return edge;
}
function update(DataPols)
{if (typeof DataPols == 'undefined') DataPols=pol;
	if (camera.position.length() < DataPols.camera[2]) 
		camera.position.setLength(DataPols.camera[2]); 
	if (camera.position.length() > 5*DataPols.camera[2])
		camera.position.setLength(5*DataPols.camera[2]);
	
	controls.update();
}
function createHUDSprites (texture) {var material=new THREE.SpriteMaterial({map:texture});
var widths=material.map.image.width;
var heights=material.map.image.height;
}


function animate() {requestAnimationFrame(animate);
render();
if(S3PPre=="pol") {update();};}

var a=0; 
function render() {if(isRotating) 
{a+=0.005; 
if(a<2) {polyhedronMesh.rotation.y=(a)*Math.PI/4;} 
if(a>2) {isRotating=false;
document.getElementById("pauseRotateButton").style.display="none"
	   a=0}
} 
renderer.clear();
renderer.render(scene,camera);
renderer.clearDepth();
renderer.render(sceneOrtho,cameraOrtho);}

if(S3PPre=="pol")
{var isRotating=false}
else{var isRotating=false};


function pauseRotation()
{var str=imgbt.src;
var str0=str.substring(str.length-9,str.length);
	if(str0=="pause.png") 
{isRotating=false;
 document.getElementById("imgbt").src ="../atractor-apps-all/icons/play.png"} 
else 
{isRotating=true;
document.getElementById("imgbt").src ="../atractor-apps-all/icons/pause.png"};}

function OnResize()
{var width0=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height0=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var width=width0;
if(S3PPre=="vplan")
{var height=Math.min(width0/2,height0);}
else
{var height=Math.min(width0,height0);};
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
