
import { useRef } from "react";
import { useBox } from '@react-three/cannon';
import { Text3D } from '@react-three/drei'
import { COLLISION_GROUPS } from '../../../app.config'


const LetterBox = ({ 
  character, 
  color,
  size,
  offsetX,
  onClick,
  position }) => {
  const _letterSize = size[0] * 1.05
  const _letterPosition = [-_letterSize * 0.5 + offsetX, -_letterSize * 0.5, 0]

  const [ref, api] = useBox(() => ({
    collisionFilterGroup: COLLISION_GROUPS.SHAPE,
    collisionFilterMask: COLLISION_GROUPS.CONTAINER | COLLISION_GROUPS.SHAPE,
    args: size,
    position,
    mass: 1
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

export default LetterBox