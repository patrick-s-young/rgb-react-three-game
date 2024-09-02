import useStore from '../../store/useStore'
import ShapeContainerWall from './ShapeContainerWall'
import { GAME_STAGES } from '../../configs/constants'
import { getContainerProps } from './container.helpers';
import { forwardRef } from 'react';


const ShapeContainer = forwardRef((props, ref) => {
  const { spawnShape, containerWidth, containerHeight,  containerDepth, containerThickness, gameStage } = useStore((state) => state)
  const _containerProps = getContainerProps({
    containerWidth, 
    containerHeight,  
    containerDepth, 
    containerThickness
  })

 const handleOnClick = (e) => {
  if (gameStage === GAME_STAGES.PlayLevel) {
    const { x, y } = e.point
    spawnShape({ x, y})
  }
 }

  return (
    <group ref={ref}>
      {Object.keys(_containerProps).map((name) => {
        const { size, position } = _containerProps[name]
        return (
          <ShapeContainerWall
            size={size}
            position={position}
            key={name}
            name={name}
            onClick={name === 'front' ? handleOnClick : undefined}
          /> 
        )
      })
    }
    </group>
  )
})

export default ShapeContainer