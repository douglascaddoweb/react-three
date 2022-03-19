import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber'
import Model from './components/models-3d/Model-draco'
import NewItem from './components/models-3d/Newitem'
import Iphone from './components/models-3d/Iphone'
import './App.css';
import { OrbitControls } from '@react-three/drei';

function App() {
  

  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
      </Canvas>
      <Canvas className='canvas3'>
        <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone/>
        </Suspense>
      </Canvas>
      <Canvas className='canvas2'>
        <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <NewItem/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
