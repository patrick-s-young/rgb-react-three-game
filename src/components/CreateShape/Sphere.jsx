import { useRef } from "react";
import { useSphere } from '@react-three/cannon';
import useStore from '../../store/useStore';

const Sphere = ({
  radius,
  dropPosition,
  color, 
  name }) => {
  const removeShape = useStore(state => state.removeShape);
  const [ref] = useSphere(() => ({
    args: radius,
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
    <sphereGeometry args={radius}/>
    <meshStandardMaterial color={color} />
  </mesh>
  )
}

export default Sphere