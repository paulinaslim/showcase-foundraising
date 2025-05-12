import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("product-info");
    const scene = new THREE.Scene();

    // Set up camera, keeping aspect ratio consistent with canvas dimensions
    const camera = new THREE.PerspectiveCamera(
        40,
        canvas.clientWidth / canvas.clientHeight,
        0.5,
        1000
    );
    camera.position.set(0, 0, 50); // Positioned closer to the product

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight); // Set size to the canvas

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zoom for fixed product display

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xeae2dd, 5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xe6c2ec, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const frontLight = new THREE.DirectionalLight(0xe6c2ec, 2);
    frontLight.position.set(0, 50, 75);
    scene.add(frontLight);

    const pointLight = new THREE.PointLight(0xe6c2ec, 1, 500);
    pointLight.position.set(0, 50, 150);
    scene.add(pointLight);

    let product = null;

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
        "/images/3D/product/scene.gltf",
        function (gltf) {
            product = gltf.scene;
            product.scale.set(200, 200, 200);
            product.position.set(0, 0, 0); // Center product in scene
            product.rotation.y = 0; // Initial rotation angle

            scene.add(product);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
            console.error("Error loading the model", error);
        }
    );

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        if (product) {
            product.rotation.y += 0.01;
        }

        // Render the scene
        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
        // Update renderer size and camera aspect ratio
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    });
});
