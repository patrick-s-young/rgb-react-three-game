import { useRef } from "react";
import { useSphere } from '@react-three/cannon';
import { COLLISION_GROUPS, CONTACT_MATERIALS } from '../../../configs/physics';


const PuppetSphere = ({
  color, 
  position,
  args }) => {

  const [ref, api] = useSphere(() => ({
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
      <sphereGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default PuppetSphere