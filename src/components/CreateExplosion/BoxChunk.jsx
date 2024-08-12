import { useRef } from "react";
import { useBox } from '@react-three/cannon';


const BoxChunk = ({
  color, 
  startPosition,
  name,
  size }) => {
  const [ref] = useBox(() => ({
    args: size,
    position: [...startPosition],
    mass: 1
  }), useRef(null));

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default BoxChunk