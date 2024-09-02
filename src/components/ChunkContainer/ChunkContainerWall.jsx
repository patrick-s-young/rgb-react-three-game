import { COLLISION_GROUPS } from '../../configs/constants';
import { useBox } from '@react-three/cannon'

const ChunkContainerWall = ({
  size,
  position,
  name }) => {

  const [ref] = useBox(() => ({
    collisionFilterGroup: COLLISION_GROUPS.CHUNK_CONTAINER,
    collisionFilterMask: COLLISION_GROUPS.CHUNK | COLLISION_GROUPS.CHUNK_CONTAINER,
    args: size,
    position
  }))


  return (
    <mesh ref={ref} name={name}>
      <boxGeometry args={size}/>
      <meshStandardMaterial visible={false} />
    </mesh>
  )
}

export default ChunkContainerWall