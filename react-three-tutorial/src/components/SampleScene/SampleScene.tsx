import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import "./SampleScene.css";
import { OrbitControls } from "@react-three/drei";

function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, __) => {
    if (
      meshRef == null ||
      meshRef.current == null ||
      meshRef.current.rotation == null
    ) {
      return;
    }
    // meshRef.current.rotation.x += delta;
    // meshRef.current.rotation.y += delta * 0.5;
  });

  const normalMap = useLoader(TextureLoader, "/images/sample.jpg");

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={normalMap} />
    </mesh>
  );
}

const SampleScene = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default SampleScene;
