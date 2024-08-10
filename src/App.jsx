import { useRef, useEffect } from 'react'
import { useRgbStore } from './store/rgbStore'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import {   
  Container,
  ShapeController,
  ScreenSettings } from './components'
import { CameraControls } from '@react-three/drei';
import { Box3 } from "three";
import './App.css'

function App() {
  const { spawnShape } = useRgbStore((state) => state)
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
    const interval = setInterval(() => spawnShape(), 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='App'>
      <ScreenSettings />
      <Canvas>
        <CameraControls makeDefault ref={controlsRef} />
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
        <Physics>
          <Debug scale={1} color='green'>
            <ShapeController/>
            <Container ref={boxRef} />
          </Debug>
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
