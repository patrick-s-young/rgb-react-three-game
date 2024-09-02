import { useRef, useEffect } from "react";
import { useSphere } from '@react-three/cannon';
import { CONTACT_MATERIALS } from '../../configs/contactMaterials';
import { COLLISION_GROUPS } from '../../configs/constants';

const Sphere = ({
  radius,
  dropPosition,
  color, 
  handleRemoveShape,
  name }) => {
  const _positionRef = useRef([0, 50, 0])
  const [ref, api] = useSphere(() => ({
    material: CONTACT_MATERIALS.SHAPE,
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    args: radius,
    position: [...dropPosition],
    mass: 1,
    onCollide: handleOnCollide
  }), useRef(null));

  const handleOnCollide = (e) => {
    if (e.body?.isShape && e.body.color === e.target.color)  {
      handleRemoveShape({ 
        name: e.target.name, 
        position: _positionRef.current,
        color: e.target.color,
        chunkType: 'sphereChunk'
      }) 
    }
  }

  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => (_positionRef.current = pos))
    return unsubscribe
  }, [])

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <sphereGeometry args={radius}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Sphere