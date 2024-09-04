import { useRef, useEffect, useState } from 'react';
import { useBox } from '@react-three/cannon';
import { CYLINDER_QUATERNION } from '../../configs/shape'

const CircleChunk = ({
  angularVelocity,
  args,
  collisionFilterGroup, 
  collisionFilterMask,
  color,
  mass,
  name,
  position,
  velocity,
  handleRemoveChunk
}) => {
  const [visible, setVisible] = useState(false)
  const _positionRef = useRef([0, 50, 0])
  const [ref, api] = useBox(() => ({
    angularVelocity,
    args,
    collisionFilterGroup, 
    collisionFilterMask,
    mass,
    name,
    position,
    quaternion: CYLINDER_QUATERNION,
    velocity
  }), useRef(null));

  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => (_positionRef.current = pos))
    return unsubscribe
  }, [])

  useEffect(() => {
    setTimeout(() => setVisible(true), 10)
    const _intervalId  = setInterval(() => handleRemoveChunk({ 
      chunkPosition: _positionRef.current, 
      chunkName: name 
    }), 1000)
    return () => clearInterval(_intervalId)
  }, [])

  return (
    <mesh visible={visible} ref={ref} name={name} color={color} isShape={true}>
      <cylinderGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default CircleChunk