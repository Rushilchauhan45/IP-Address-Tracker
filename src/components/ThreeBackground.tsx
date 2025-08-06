import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple floating shapes component
function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.1;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[10, 5, -10]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial />
      </mesh>
      <mesh position={[-8, -3, -8]}>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial />
      </mesh>
      <mesh position={[5, -8, -12]}>
        <tetrahedronGeometry args={[1]} />
        <meshBasicMaterial />
      </mesh>
      <mesh position={[-5, 8, -6]}>
        <octahedronGeometry args={[1.2]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}

// Ambient lighting component
function Lighting() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 8;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 8;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight ref={lightRef} intensity={0.8} position={[0, 0, 0]} />
      <directionalLight intensity={0.3} position={[10, 10, 5]} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-canvas">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ 
          width: '100vw', 
          height: '100vh',
          background: 'transparent'
        }}
      >
        <Lighting />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}