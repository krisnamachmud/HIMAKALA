import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Torus, Sphere, Box } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating Data Nodes - Network visualization
function DataNodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => [
    { pos: [-2, 1, 0], size: 0.15, color: '#22d3ee' },
    { pos: [-1.5, 0.3, 0.5], size: 0.1, color: '#3b82f6' },
    { pos: [-2.5, -0.5, -0.3], size: 0.12, color: '#f4b942' },
    { pos: [-1.8, -0.8, 0.8], size: 0.08, color: '#22d3ee' },
    { pos: [-2.2, 0.8, -0.5], size: 0.1, color: '#3b82f6' },
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={[-2, 0.5, 0]}>
        {nodes.map((node, i) => (
          <Sphere key={i} args={[node.size, 16, 16]} position={node.pos as [number, number, number]}>
            <meshStandardMaterial 
              color={node.color} 
              emissive={node.color} 
              emissiveIntensity={1.5}
              metalness={0.5}
              roughness={0.2}
            />
          </Sphere>
        ))}
        {/* Connection lines */}
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={10}
              array={new Float32Array([
                -2, 1, 0, -1.5, 0.3, 0.5,
                -1.5, 0.3, 0.5, -2.5, -0.5, -0.3,
                -2.5, -0.5, -0.3, -1.8, -0.8, 0.8,
                -1.8, -0.8, 0.8, -2.2, 0.8, -0.5,
                -2.2, 0.8, -0.5, -2, 1, 0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.4} />
        </line>
      </group>
    </Float>
  );
}

// Holographic Ring - Modern tech element
function HolographicRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.25;
      ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[2.5, 0, 0]}>
        <Torus ref={ringRef} args={[1, 0.02, 16, 64]}>
          <meshStandardMaterial 
            color="#22d3ee" 
            emissive="#22d3ee" 
            emissiveIntensity={2}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
        <Torus ref={ring2Ref} args={[0.8, 0.015, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
        <Torus ref={ring3Ref} args={[0.6, 0.01, 16, 64]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <meshStandardMaterial 
            color="#f4b942" 
            emissive="#f4b942" 
            emissiveIntensity={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
        {/* Center core */}
        <Sphere args={[0.15, 32, 32]}>
          <MeshDistortMaterial
            color="#ffffff"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
            distort={0.3}
            speed={3}
            metalness={0.5}
            roughness={0.2}
          />
        </Sphere>
      </group>
    </Float>
  );
}

// Floating Cube Grid - Digital/Data visualization
function CubeGrid() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const cubes = useMemo(() => {
    const arr = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (Math.random() > 0.3) {
          arr.push({ x: x * 0.4, y: y * 0.4, z: (Math.random() - 0.5) * 0.3 });
        }
      }
    }
    return arr;
  }, []);

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.7}>
      <group ref={groupRef} position={[0, 1.8, -1]}>
        {cubes.map((cube, i) => (
          <Box key={i} args={[0.15, 0.15, 0.15]} position={[cube.x, cube.y, cube.z]}>
            <meshStandardMaterial
              color={i % 2 === 0 ? '#3b82f6' : '#22d3ee'}
              emissive={i % 2 === 0 ? '#3b82f6' : '#22d3ee'}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </Box>
        ))}
      </group>
    </Float>
  );
}

// Abstract Tech Shape
function TechShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef} position={[0, -1.5, 0]}>
        <octahedronGeometry args={[0.8, 0]} />
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.3}
          distort={0.2}
          speed={2}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// Particle Field
function ParticleField() {
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 12,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 6 - 2,
        size: Math.random() * 0.03 + 0.01,
      });
    }
    return arr;
  }, []);

  return (
    <group>
      {particles.map((p, i) => (
        <Sphere key={i} args={[p.size, 8, 8]} position={[p.x, p.y, p.z]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
        </Sphere>
      ))}
    </group>
  );
}

// Wireframe background sphere
function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -4]}>
      <icosahedronGeometry args={[5, 1]} />
      <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-5, 5, 5]} intensity={0.8} color="#22d3ee" />
          <pointLight position={[5, -5, 5]} intensity={0.6} color="#f4b942" />
          <pointLight position={[0, 0, 5]} intensity={0.3} color="#3b82f6" />
          
          <DataNodes />
          <HolographicRing />
          <CubeGrid />
          <TechShape />
          <ParticleField />
          <WireframeSphere />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
