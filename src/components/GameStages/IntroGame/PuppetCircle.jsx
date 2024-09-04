import { useRef } from "react";
import { useCylinder } from '@react-three/cannon';
import { CYLINDER_QUATERNION } from '../../../configs/shape'
import { CONTACT_MATERIALS, COLLISION_GROUPS } from "../../../configs/physics";


const PuppetCircle = ({
  color, 
  position,
  args }) => {

  const [ref, api] = useCylinder(() => ({
    args,
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    linearFactor: [0, 1, 0],
    angularFactor: [0, 0, 0],
    mass: 1,
    material: CONTACT_MATERIALS.SHAPE,
    position,
    quaternion: CYLINDER_QUATERNION
  }), useRef(null));


  return (
    <mesh ref={ref}>
      <cylinderGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default PuppetCircle