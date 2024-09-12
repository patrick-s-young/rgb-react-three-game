import { useRef, useEffect } from 'react';
import { useBox } from '@react-three/cannon';

const SquareChunk = ({
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
  const _positionRef = useRef([0, 50, 0])
  const [ref, api] = useBox(() => ({
    angularVelocity,
    args,
    collisionFilterGroup, 
    collisionFilterMask,
    mass,
    name,
    position,
    velocity
  }), useRef(null));

  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => (_positionRef.current = pos))
    return unsubscribe
  }, [])

  useEffect(() => {
    const _intervalId  = setInterval(() => handleRemoveChunk({ 
      chunkPosition: _positionRef.current, 
      chunkName: name 
    }), 1000)
    return () => clearInterval(_intervalId)
  }, [])

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <boxGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default SquareChunk