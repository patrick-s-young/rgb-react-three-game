
import { useRef } from "react";
import { useBox } from '@react-three/cannon';
import { Text3D } from '@react-three/drei'
import { CONTACT_MATERIALS, COLLISION_GROUPS } from "../../../configs/physics";

const PuppetLetter = ({ 
  character, 
  color,
  args,
  offsetX,
  onClick,
  position }) => {
  const _letterSize = args[0] * .95
  const _letterPosition = [-_letterSize * 0.5 + offsetX, -_letterSize * 0.5, 0]

  const [ref, api] = useBox(() => ({
    args,
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    linearFactor: [0, 1, 0],
    angularFactor: [0, 0, 0],
    mass: 1, 
    material: CONTACT_MATERIALS.SHAPE,
    position
  }), useRef(null));


  const handleOnClick = () => {
    onClick()
  }
  return (
    <mesh ref={ref} onClick={handleOnClick}>
      <Text3D
        position={_letterPosition}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={_letterSize}
        font="/Inter_Bold.json">
        {character}
        <meshStandardMaterial color={color} />
      </Text3D>
    </mesh>
  )
}

export default PuppetLetter