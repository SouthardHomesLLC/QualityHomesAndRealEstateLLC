// /src/scripts/goldparticles.ts
import * as THREE from "three";

export function particles() {
  const canvas = document.getElementById(
    "particle-canvas",
  ) as HTMLCanvasElement | null;

  if (!canvas) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) return;

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const particlesCount = isMobile ? 100 : 200;

  //Scene setup
  const scene = new THREE.Scene();

  //Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 5;

  //Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  //Particle geometry
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 12;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 5;
  }

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  //Soft particle texture
  const createCircleTexture = () => {
    const textureCanvas = document.createElement("canvas");

    textureCanvas.width = 16;
    textureCanvas.height = 16;

    const context = textureCanvas.getContext("2d");

    if (context) {
      const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);

      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      context.fillStyle = gradient;
      context.fillRect(0, 0, 16, 16);
    }

    return new THREE.CanvasTexture(textureCanvas);
  };

  const particleTexture = createCircleTexture();

  const material = new THREE.PointsMaterial({
    size: 0.04,
    color: new THREE.Color("#E6A778"),
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    map: particleTexture,
  });

  const particleMesh = new THREE.Points(geometry, material);
  scene.add(particleMesh);

  const timer = new THREE.Timer();

  let animationFrameId = 0;
  let isVisible = !document.hidden;

  const animate = (timestamp: number) => {
    animationFrameId = requestAnimationFrame(animate);

    if (!isVisible) return;

    timer.update(timestamp);

    const elapsedTime = timer.getElapsed();
    const delta = Math.min(timer.getDelta(), 0.05);

    const positionAttribute = geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;

    const currentPositions = positionAttribute.array as Float32Array;

    for (let i = 0; i < currentPositions.length; i += 3) {
      currentPositions[i + 1] += 0.06 * delta;
      currentPositions[i] += Math.sin(elapsedTime + i) * 0.025 * delta;

      if (currentPositions[i + 1] > 5) {
        currentPositions[i + 1] = -5;
      }
    }

    positionAttribute.needsUpdate = true;
    renderer.render(scene, camera);
  };

  const handleVisibilityChange = () => {
    isVisible = !document.hidden;
  };

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  window.addEventListener("resize", handleResize);

  animationFrameId = requestAnimationFrame(animate);

  //Optional cleanup for Astro navigation or component removal
  return () => {
    cancelAnimationFrame(animationFrameId);

    document.removeEventListener("visibilitychange", handleVisibilityChange);

    window.removeEventListener("resize", handleResize);

    scene.remove(particleMesh);
    geometry.dispose();
    material.dispose();
    particleTexture.dispose();
    renderer.dispose();
  };
}
