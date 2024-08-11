import { useRef } from "react";
import { useBox } from '@react-three/cannon';
import useStore from '../../store/useStore';

const Box = ({
  size,
  dropPosition,
  color, 
  name }) => {
  const removeShape = useStore(state => state.removeShape);
  const [ref] = useBox(() => ({
    args: size,
    position: [...dropPosition],
    mass: 1,
    onCollide: (e) => { 
      if (e.body?.isShape && e.body.color === color)  {
        removeShape(name) 
      }
    }
  }), useRef(null));


  return (
  <mesh ref={ref} name={name} color={color} isShape={true}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color} />
  </mesh>
  )
}

export default Box