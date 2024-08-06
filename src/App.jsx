import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import { Container, ScreenSettings } from './components'
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
    setTimeout(fitToBox, 500)
  }, [])

  return (
    <div className='App'>
      <Canvas>
        <CameraControls makeDefault ref={controlsRef} />
        <Physics defaultContactMaterial={{ friction: 0.7, restitution: 0.4 }}>
          <Debug scale={1} color='green'>
            <Container ref={boxRef} />
          </Debug>
        </Physics>
      </Canvas>
      <ScreenSettings />
    </div>
  )
}

export default App
