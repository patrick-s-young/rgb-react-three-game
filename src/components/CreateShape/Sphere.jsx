import { useRef } from "react";
import { useSphere } from '@react-three/cannon';


const Sphere = ({
  radius,
  dropPosition,
  color, 
  handleOnCollide,
  name }) => {
  const [ref] = useSphere(() => ({
    args: radius,
    position: [...dropPosition],
    mass: 1,
    onCollide: handleOnCollide
  }), useRef(null));

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <sphereGeometry args={radius}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Sphere