import { COLLISION_GROUPS } from '../../app.config';
import { useBox } from '@react-three/cannon'

const ContainerWall = ({
  size,
  position,
  name,
  onClick }) => {

  const [ref] = useBox(() => ({
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

export default ContainerWall