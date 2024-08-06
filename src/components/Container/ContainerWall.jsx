// physics body
import { useBox } from '@react-three/cannon'

export const ContainerWall = ({
  size,
  position,
  name
}) => {

  const [ref] = useBox(() => ({
    args: size,
    position
  }))


  return (
    <mesh ref={ref} name={name}>
      <boxGeometry args={size}/>
    </mesh>
  )
}