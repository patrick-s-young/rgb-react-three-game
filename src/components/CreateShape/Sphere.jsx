import { useRef } from "react";
import { useSphere } from '@react-three/cannon';

const Sphere = ({
  radius,
  dropPosition,
  color, 
  name
}) => {

  const [ref] = useSphere(() => ({
    args: radius,
    position: [...dropPosition],
    mass: 1
  }), useRef(null));


  return (
  <mesh ref={ref} name={name}>
    <sphereGeometry args={radius}/>
    <meshStandardMaterial color={color} />
  </mesh>
  )
}

export default Sphere