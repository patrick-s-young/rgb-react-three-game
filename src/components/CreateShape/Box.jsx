import { useRef } from "react";
import { useBox } from '@react-three/cannon';
import { COLLISION_GROUPS } from '../../app.config';

const Box = ({
  color, 
  dropPosition,
  handleOnCollide,
  name,
  size }) => {
  const [ref] = useBox(() => ({
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    args: size,
    position: [...dropPosition],
    mass: 1,
    onCollide: handleOnCollide
  }), useRef(null));

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Box