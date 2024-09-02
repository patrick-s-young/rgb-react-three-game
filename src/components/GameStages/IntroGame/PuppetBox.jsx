import { useRef } from "react";
import { useBox } from '@react-three/cannon';
import { COLLISION_GROUPS } from '../../../configs/constants'
import { CONTACT_MATERIALS } from "../../../configs/contactMaterials";

const PuppetBox = ({
  color, 
  position,
  size }) => {

  const [ref, api] = useBox(() => ({
    args: size,
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
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default PuppetBox