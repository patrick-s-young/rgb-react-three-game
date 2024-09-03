import { useRef, useEffect } from "react";
import { useCylinder } from '@react-three/cannon';
import { CONTACT_MATERIALS } from '../../configs/contactMaterials';
import { COLLISION_GROUPS, OCT_QUATERNION } from '../../configs/constants';


const OctagonShape = ({
  args,
  position,
  color, 
  handleRemoveShape,
  name }) => {
  const _positionRef = useRef([0, 50, 0])
  const [ref, api] = useCylinder(() => ({
    material: CONTACT_MATERIALS.SHAPE,
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    args,
    position,
    mass: 1,
    quaternion: OCT_QUATERNION,
    onCollide: handleOnCollide
  }), useRef(null));

  const handleOnCollide = (e) => {
    if (e.body?.isShape && e.body.color === e.target.color)  {
      handleRemoveShape({ 
        name: e.target.name, 
        position: _positionRef.current,
        color: e.target.color,
        chunkType: 'boxChunk'
      }) 
    }
  }

  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => (_positionRef.current = pos))
    return unsubscribe
  }, [])

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <cylinderGeometry args={args}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default OctagonShape