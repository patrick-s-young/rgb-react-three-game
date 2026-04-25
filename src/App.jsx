import { useEffect, useMemo, useState } from 'react'
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

const isDeviceTouchPreview = () => {
  if (typeof window === 'undefined') return false
  if (!import.meta.env.DEV) return false

  const coarsePointer = window.matchMedia('(pointer: coarse)').matches
  const noHover = window.matchMedia('(hover: none)').matches
  return coarsePointer && noHover
}

function App() {
  const _spotLight = useMemo(() => new SpotLight('#fff'), []);
  const { containerWidth, containerHeight } = useStore((state) => state)
  const [isTouchPreviewMode, setIsTouchPreviewMode] = useState(isDeviceTouchPreview)
  const _aspect = containerWidth/containerHeight
  const _position = [0, containerHeight * .51, 43]
  const _spotLightPosition = [0, 0, 5]
  const _spotLightTarget = [0, containerHeight * .49, 0]
  const _backgroundColor = isTouchPreviewMode ? '#3a3a3a' : 'black'

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    if (!import.meta.env.DEV) return undefined

    const coarsePointerQuery = window.matchMedia('(pointer: coarse)')
    const hoverQuery = window.matchMedia('(hover: none)')
    const updateMode = () => {
      setIsTouchPreviewMode(coarsePointerQuery.matches && hoverQuery.matches)
    }
    const addListener = (query) => {
      if (query.addEventListener) query.addEventListener('change', updateMode)
      else query.addListener(updateMode)
    }
    const removeListener = (query) => {
      if (query.removeEventListener) query.removeEventListener('change', updateMode)
      else query.removeListener(updateMode)
    }

    updateMode()
    addListener(coarsePointerQuery)
    addListener(hoverQuery)

    return () => {
      removeListener(coarsePointerQuery)
      removeListener(hoverQuery)
    }
  }, [])


  return (
    <div className='App'>
      <ScreenSettings />
      <Canvas camera={{ position: _position, rotation: [0, 0, 0],  aspect: _aspect, fov: 30 }}>
        <color attach="background" args={[_backgroundColor]} />

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
