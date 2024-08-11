// physics body
import { useBox } from '@react-three/cannon'

const ContainerWall = ({
  size,
  position,
  name,
  onClick }) => {

  const [ref] = useBox(() => ({
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