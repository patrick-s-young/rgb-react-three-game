import { useRef } from "react";
import { useBox } from '@react-three/cannon';
import { CONTACT_MATERIALS, COLLISION_GROUPS } from "../../../configs/physics";

const PuppetSquare = ({
  color, 
  position,
  args }) => {

  const [ref, api] = useBox(() => ({
    args,
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    linearFactor: [0, 1, 0],
    angularFactor: [0, 0, 0],
    mass: 1,
    material: CONTACT_MATERIALS.SHAPE,
    position
  }), useRef(null));


  return (
    <mesh ref={ref}>
      <boxGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default PuppetSquare