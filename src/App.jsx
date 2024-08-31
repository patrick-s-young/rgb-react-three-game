import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import {   
  ChunkContainer,
  Container,
  ExplosionController,
  GameStages,
  ScreenSettings,
  ShapeController } from './components'
import { CameraControls } from '@react-three/drei';
import { Box3 } from "three";
import './App.css'

function App() {
  const controlsRef = useRef(null);
  const boxRef = useRef(null)

  const fitToBox = () => {
    const controls = controlsRef.current;
    const mesh = boxRef.current;
    if (!controls || !mesh) {
      return;
    }
    const box3 = new Box3().setFromObject(mesh);
    controls.fitToBox(box3, true, {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    });
  };

  useEffect(() => {
    setTimeout(fitToBox, 250)
  }, [])

  return (
    <div className='App'>
      <ScreenSettings />
      <Canvas camera={{ fov: 5 }}>
        <CameraControls makeDefault ref={controlsRef} />
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
        <GameStages/>
        <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.5 }} gravity={[0, -19, 0]}>
          <Debug scale={1} color='green'>
            <ShapeController/>
            <ExplosionController/>
            <Container ref={boxRef}/>
            <ChunkContainer/>
          </Debug>
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
