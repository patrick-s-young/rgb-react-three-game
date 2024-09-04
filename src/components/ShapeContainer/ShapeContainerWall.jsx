import { COLLISION_GROUPS, CONTACT_MATERIALS } from '../../configs/physics';
import { useBox } from '@react-three/cannon'

const ShapeContainerWall = ({
  size,
  position,
  name,
  onClick }) => {

  const [ref] = useBox(() => ({
    material: CONTACT_MATERIALS.CONTAINER,
    collisionFilterGroup: COLLISION_GROUPS.CONTAINER,
    collisionFilterMask: COLLISION_GROUPS.SHAPE | COLLISION_GROUPS.CONTAINER,
    args: size,
    position
  }))


  return (
    <mesh ref={ref} name={name} onClick={onClick}>
      <boxGeometry args={size}/>
      <meshStandardMaterial visible={false} />
    </mesh>
  )
}

export default ShapeContainerWall