import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from '../components/Loader';
import Island from '../models/island';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import Bird from '../models/Bird';
import HomeInformation from '../components/HomeInformation';
import Dragon from '../models/Dragon';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustDragonForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -5.5, 3];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -11, 4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustDragonForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInformation currentStage={currentStage} />}
        </div>
      <Canvas
        className={"w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}"}
        camera={{ near: 0.1, far: 1000 }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(new THREE.Color('#0a0a1a')); // Slightly lighten the black sky
          scene.background = new THREE.Color('#0a0a1a'); // Ensure background is dark blue
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* Stars - Night Sky Effect */}
          <Stars
            radius={300} 
            depth={100} 
            count={7000} 
            factor={6} 
            saturation={0} 
            fade
          />

          {/* Moon - Glowing Sphere */}
          <mesh position={[-20, 15, -50]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial emissive="white" emissiveIntensity={1} />
          </mesh>

          {/* Lighting Adjustments */}
          <directionalLight position={[1, 1, 1]} intensity={0.5} />
          <ambientLight intensity={-0.45} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#0a0a1a" intensity={0.8} />

          {/* Spotlight on Dragon */}
          <spotLight 
            position={[10, 15, 5]} 
            angle={0.3} 
            penumbra={0.5} 
            intensity={2} 
            color={'#ff4500'} // Warm orange-red glow
            target-position={[0, 0, 0]} 
            castShadow 
          />
          {/* 3D Island Model */}
          <Bird/>
          <Island 
          position={islandPosition} 
          scale={islandScale} 
          rotation={islandRotation} 
          isRotating={isRotating} 
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          />
          {<Dragon
          isRotating={isRotating}
          scale={planeScale}
          position={planePosition}
          rotation={[0, 20, 0]}
          />}
          
          {/* <Airplane 
          isRotating={isRotating}
          planeScale={planeScale}
          planePosition={planePosition}
          rotation={[0, 20, 0]}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
