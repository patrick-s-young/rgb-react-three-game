import { useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { COLLISION_GROUPS } from '../../app.config';


const BoxChunk = ({
  color, 
  startPosition,
  name,
  size }) => {
  const [ref] = useBox(() => ({
    collisionFilterGroup: COLLISION_GROUPS.CHUNK,
    collisionFilterMask: COLLISION_GROUPS.CHUNK, // add floor
    args: size,
    position: [...startPosition],
    mass: 1,
    velocity: [0, 20, 0]
  }), useRef(null));

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default BoxChunk