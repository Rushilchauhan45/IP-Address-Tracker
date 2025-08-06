import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated floating orbs with glowing effects
function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const Orb = ({ position, color, size }: { position: [number, number, number], color: string, size: number }) => {
    const orbRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
      if (orbRef.current) {
        orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 2;
        orbRef.current.rotation.x = state.clock.elapsedTime * 0.5;
        orbRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      }
    });

    return (
      <mesh ref={orbRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          args={[{
            color: color,
            transparent: true,
            opacity: 0.6,
          }]}
        />
        {/* Glow effect */}
        <mesh scale={1.2}>
          <sphereGeometry args={[size, 16, 16]} />
          <meshBasicMaterial
            args={[{
              color: color,
              transparent: true,
              opacity: 0.2,
            }]}
          />
        </mesh>
      </mesh>
    );
  };

  return (
    <group ref={group}>
      <Orb position={[-8, 0, -5]} color="#8b5cf6" size={1.5} />
      <Orb position={[8, 2, -8]} color="#06b6d4" size={1.2} />
      <Orb position={[0, -3, -10]} color="#f59e0b" size={1.8} />
      <Orb position={[-5, 4, -12]} color="#ec4899" size={1.3} />
      <Orb position={[6, -2, -6]} color="#10b981" size={1.4} />
    </group>
  );
}

// Animated geometric rings
function AnimatedRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -state.clock.elapsedTime * 0.2;
      ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ring3Ref.current.rotation.z = -state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, -15]}>
        <torusGeometry args={[5, 0.3, 8, 64]} />
        <meshBasicMaterial
          args={[{
            color: '#8b5cf6',
            transparent: true,
            opacity: 0.4,
            wireframe: true
          }]}
        />
      </mesh>
      
      <mesh ref={ring2Ref} position={[0, 0, -20]} scale={1.5}>
        <torusGeometry args={[4, 0.2, 6, 48]} />
        <meshBasicMaterial
          args={[{
            color: '#06b6d4',
            transparent: true,
            opacity: 0.3,
            wireframe: true
          }]}
        />
      </mesh>
      
      <mesh ref={ring3Ref} position={[0, 0, -25]} scale={2}>
        <torusGeometry args={[3, 0.1, 4, 32]} />
        <meshBasicMaterial
          args={[{
            color: '#f59e0b',
            transparent: true,
            opacity: 0.2,
            wireframe: true
          }]}
        />
      </mesh>
    </>
  );
}

// Floating particles for ambiance
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  // Create particle positions
  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        args={[{
          size: 0.5,
          color: '#ffffff',
          transparent: true,
          opacity: 0.6,
          sizeAttenuation: true
        }]}
      />
    </points>
  );
}

// Enhanced lighting for dramatic effect
function DynamicLighting() {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 10;
      light1Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 10;
      light1Ref.current.intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 8;
      light2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 6;
      light2Ref.current.intensity = 0.3 + Math.cos(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} color="#1e1b4b" />
      <pointLight ref={light1Ref} intensity={0.5} position={[0, 0, 0]} color="#8b5cf6" />
      <pointLight ref={light2Ref} intensity={0.3} position={[0, 0, 0]} color="#06b6d4" />
      <directionalLight intensity={0.2} position={[10, 10, 5]} color="#ffffff" />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-canvas">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ 
          width: '100vw', 
          height: '100vh',
          background: `
            radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%),
            linear-gradient(135deg, #0c0a1a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0c0a1a 100%)
          `
        }}
      >
        <DynamicLighting />
        <FloatingOrbs />
        <AnimatedRings />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}