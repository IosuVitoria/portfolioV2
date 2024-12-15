import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient and Directional Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} castShadow />

      {/* Mesh for the Ball */}
      <mesh castShadow receiveShadow scale={1.5}> {/* Reduce scale for smaller size */}
        <sphereGeometry args={[1, 32, 32]} /> {/* Perfect sphere with higher segments */}
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        {/* Decal Texture */}
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
