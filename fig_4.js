let canvas = document.getElementById("glcanvas");
const scene = new THREE.Scene({color: 0xfff});
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light;
    light = new THREE.DirectionalLight();
    light.position.set(-5, -4, 10);
    camera.add(light);
    scene.add(camera);

const material = new THREE.MeshPhongMaterial(
    {
        color: 0x000000,
        // wireframe: true
    });

const baseGeometry = new THREE.CylinderGeometry(1, 1, 0.15, 100);
const base = new THREE.Mesh(baseGeometry, material);
const upperBaseGeometry = new THREE.CylinderGeometry(0.9, 0.9, 0.25, 100);
const upperBase = new THREE.Mesh(upperBaseGeometry, material);
upperBase.position.y = 0.1;

let group = new THREE.Group();
    group.add(base);
    group.add(upperBase);
    group.position.set(0, -3.8, 0);
    group.scale.set(3, 2, 1);

let points = [];
    for (var i = 0; i < 7; i++) {
        points.push(new THREE.Vector2(Math.tan(i * 0.1)*3+6 , (i - 5) * 4));
    }
let size = 0.2;
let geometry1 = new THREE.LatheGeometry(points);
let lathe1 = new THREE.Mesh(geometry1, material);
    lathe1.position.set(0, -1.7, -0.3);
    lathe1.scale.set(size, -size, -size);

    
//////////////////////////////////////////////////////////////////////////////////////////
const ringGeometry = new THREE.CylinderGeometry(2.5, 10.5, 0.4, 100);
const ring = new THREE.Mesh(ringGeometry, material);
    ring.position.set(0, 10, 0);

const ballGeometry = new THREE.SphereGeometry(Math.PI / 2, 100, 100, Math.PI,  2*Math.PI, 0, 0.8 * Math.PI);

    material.side = THREE.DoubleSide;
const ball = new THREE.Mesh(ballGeometry, material);
    ball.position.set(0, 1.4, 0);
    ball.scale.set(0.6,-1,-0.8);

    const balltop = new THREE.SphereGeometry(Math.PI / 4, 30, 30, Math.PI,  2*Math.PI, 0, 0.2 * Math.PI);
    material.side = THREE.DoubleSide;
const ballt = new THREE.Mesh(balltop, material);
    ballt.position.set(0, 1.75, 0);
    ballt.scale.set(0.8,-1,-1);

let head = new THREE.Group();
    head.add(ball);
    head.position.set(0,1.8,0);

    let head1 = new THREE.Group();
    head1.add(ballt);
    head1.position.set(0,4,0);

const cyl = new THREE.CylinderGeometry(1.2, 1.2, 0.1, 120);
const cyl1 = new THREE.Mesh(cyl, material);
const cyll = new THREE.CylinderGeometry(1, 1.1, 0.1, 100);
const cyll1 = new THREE.Mesh(cyll, material);
cyll1.position.y = 0.1;
let head2 = new THREE.Group();
head2.add(cyl1);
head2.add(cyll1);
head2.position.set(0,2,0);
head2.scale.set(2, 2.5, 1);

let chessPawn = new THREE.Group();
    chessPawn.add(group, head2,lathe1, head,head1);
    scene.add(chessPawn);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

camera.position.z = 5;

animate();
