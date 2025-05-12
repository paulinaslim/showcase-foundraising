// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// document.addEventListener("DOMContentLoaded", function () {
//     //standart settings
//     const canvas = document.getElementById("canvas");
//     const scene = new THREE.Scene();

//     // helpers
//     // const helper = new THREE.CameraHelper(light.shadow.camera);
//     // scene.add(helper);

//     //colors
//     const red = new THREE.Color("rgb(151, 68, 68)");
//     const canadianGreyTransparent = new THREE.Color("rgba(234, 221, 234, 0.2)");

//     //field view, aspect ratio, view frustrum(what's visible for user)
//     const camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     );
//     const renderer = new THREE.WebGLRenderer({ canvas });
//     const controls = new OrbitControls(camera, renderer.domElement);

//     //setting camera  to middle od the screen:
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.setZ(30);
//     // render = draw

//     // torus shape
//     const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//     const material = new THREE.MeshBasicMaterial({
//         color: red,
//         // wireframe: true,
//     });

//     // const material = new THREE.MeshStandardMaterial({
//     //     color: 0xffff00,
//     // });
//     // const torus = new THREE.Mesh(geometry, material);
//     // scene.add(torus);

//     // function animate() {
//     //     requestAnimationFrame(animate);
//     //     // rotation x,y,z axis
//     //     torus.rotation.x += 0.02;
//     //     torus.rotation.y += 0.001;
//     //     torus.rotation.z += 0.01;
//     //     controls.update();
//     //     renderer.render(scene, camera);
//     // }
//     // animate();

//     const loader = new GLTFLoader();

//     loader.load(
//         "/images/3D/meat/scene.gltf",

//         function (gltf) {
//             scene.add(gltf.scene);

//             gltf.animations;
//             gltf.scene;
//             gltf.scenes;
//             gltf.cameras;
//             gltf.asset;
//         },
//         function (xhr) {
//             console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//         },
//         function animate() {
//             requestAnimationFrame(animate);
//             gltf.rotation.x += 0.02;
//             gltf.rotation.y += 0.001;
//             gltf.rotation.z += 0.01;
//             controls.update();
//             renderer.render(scene, camera);
//             animate();
//         },
//         function (error) {
//             console.log("An error happened");
//         }
//     );
// });
