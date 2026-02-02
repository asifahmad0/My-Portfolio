import React from 'react'
import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Object2() {

    function Hero3DObject() {
      return (
        <Float speed={2} rotationIntensity={1.1} floatIntensity={1.8}>
          <mesh>
            <torusKnotGeometry args={[1, 0.35, 120, 16]} />
            <meshStandardMaterial
              color="#2E6B46"
              roughness={0.25}
              metalness={0.85}
            />
          </mesh>
        </Float>
      );
    }
    

  return (
    <div className=' border relative w-[100dvw] h-[30dvh] lg:w-[100dvw] lg:h-[100dvh] '>

        <Canvas className="absolute inset-0 w-[100%] h-[100%]" camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <Hero3DObject />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
    </div>
  )
}

export default Object2
