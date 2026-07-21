// /src/scripts/goldparticles.ts
import * as THREE from "three";

export function particles() {
  const canvas = document.getElementById(
    "particle-canvas",
  ) as HTMLCanvasElement;

  if (canvas) {
    //Scene Setup
    const scene = new THREE.Scene();

    //Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    //Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    //Explicitly force the canvas element style widths to match the renderer
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //Particles Geometry & Material
    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      //Spread particles across the screen
      positions[i] = (Math.random() - 0.5) * 12; //X axis
      positions[i + 1] = (Math.random() - 0.5) * 10; //Y axis
      positions[i + 2] = (Math.random() - 0.5) * 5; //Z axis
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    //Create a soft particle texture using basic canvas drawing
    const createCircleTexture = () => {
      const c = document.createElement("canvas");
      c.width = 16;
      c.height = 16;
      const ctx = c.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(c);
    };

    const material = new THREE.PointsMaterial({
      size: 0.04,
      color: new THREE.Color("#E6A778"), //logo gold
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createCircleTexture(),
    });

    const particleMesh = new THREE.Points(geometry, material);
    scene.add(particleMesh);

    //Animation Loop
    const clock = new THREE.Timer();

    const animate = (timestamp: number) => {
      requestAnimationFrame(animate);

      //Update the timer exactly once using the frame timestamp
      clock.update(timestamp);

      const elapsedTime = clock.getElapsed();
      const currentPositions = geometry.attributes.position
        .array as Float32Array;

      //Make particles gently drift upwards and sway side to side
      for (let i = 0; i < particlesCount * 3; i += 3) {
        //Slow upward movement
        currentPositions[i + 1] += 0.001;
        //Swaying effect using sine waves based on particle index
        currentPositions[i] += Math.sin(elapsedTime + i) * 0.0008;

        //Reset particle to bottom if it goes too high
        if (currentPositions[i + 1] > 5) {
          currentPositions[i + 1] = -5;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    //Bootstrap the loop by passing a baseline performance timestamp
    requestAnimationFrame(animate);

    //Handle Window Resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
