import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import {   
  ChunkContainer,
  ContactMaterials,
  ShapeContainer,
  ExplosionController,
  GameStages,
  ScreenSettings,
  ShapeController } from './components'
import { SpotLight } from "three";
import useStore from './store/useStore';
import './App.css'

function App() {
  const _spotLight = useMemo(() => new SpotLight('#fff'), []);
  const { containerWidth, containerHeight } = useStore((state) => state)
  const _aspect = containerWidth/containerHeight
  const _position = [0, containerHeight * .52, 43]
  const _spotLightPosition = [0, 0, 5]
  const _spotLightTarget = [0, containerHeight * .49, 0]


  return (
    <div className='App'>
      <ScreenSettings />
      <Canvas camera={{ position: _position, rotation: [0, 0, 0],  aspect: _aspect, fov: 30 }}>
        <color attach="background" args={["black"]} />

        <hemisphereLight args={[0xffffff, 0xffffff]} />
        <directionalLight position={_position}/>
        <primitive
          object={_spotLight}
          position={_spotLightPosition}
          intensity={18.5}
          penumbra={0.5}
        />
        <primitive object={_spotLight.target} position={_spotLightTarget} />

        <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.5 }} gravity={[0, -19, 0]}>
          {/* <Debug scale={1} color='green'> */}
            <ContactMaterials/>
            <GameStages/>
            <ShapeController/>
            <ExplosionController/>
            <ShapeContainer/>
            <ChunkContainer/>
          {/* </Debug> */}
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
