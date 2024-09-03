import { useRef } from "react";
import { useCylinder } from '@react-three/cannon';
import { COLLISION_GROUPS, OCT_QUATERNION } from '../../../configs/constants'
import { CONTACT_MATERIALS } from "../../../configs/contactMaterials";


const PuppetOctagon = ({
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
    quaternion: OCT_QUATERNION
  }), useRef(null));


  return (
    <mesh ref={ref}>
      <cylinderGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default PuppetOctagon