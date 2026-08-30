import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function RoboticArm() {
  const armRef = useRef();

  useEffect(() => {
    if (armRef.current) {
      const animate = () => {
        if (armRef.current) {
          armRef.current.rotation.z += 0.005;
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <group ref={armRef}>
      {/* Base */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Joint 1 */}
      <group position={[0, 0.15, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#333" />
        </mesh>

        {/* Link 1 */}
        <mesh position={[0.5, 0, 0]} castShadow>
          <boxGeometry args={[1, 0.15, 0.15]} />
          <meshStandardMaterial color="#444" />
        </mesh>

        {/* Joint 2 */}
        <group position={[1, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#333" />
          </mesh>

          {/* Link 2 */}
          <mesh position={[0.4, 0, 0]} castShadow>
            <boxGeometry args={[0.8, 0.12, 0.12]} />
            <meshStandardMaterial color="#555" />
          </mesh>

          {/* End Effector */}
          <group position={[0.8, 0, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.08, 32, 32]} />
              <meshStandardMaterial color="#666" />
            </mesh>
            
            {/* TCP indicator */}
            <mesh position={[0.15, 0, 0]}>
              <sphereGeometry args={[0.05, 32, 32]} />
              <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.5} />
            </mesh>
          </group>
        </group>
      </group>

      {/* Coordinate frames */}
      <line position={[0, 0.15, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0, 0, 0.5, 0, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ff0000" linewidth={2} />
      </line>
    </group>
  );
}

function HeroVisualization() {
  return (
    <Canvas camera={{ position: [3, 2, 2], fov: 50 }} className="hero-canvas">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
      
      <RoboticArm />
      
      <OrbitControls enableZoom={false} />
      <Grid args={[10, 10]} cellSize={0.5} cellColor="#666" sectionSize={5} sectionColor="#888" fadeStrength={0.5} />
    </Canvas>
  );
}

export default HeroVisualization;
