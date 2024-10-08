import useStore from '../../store/useStore'
import ShapeContainerWall from './ShapeContainerWall'
import { GAME_STAGES } from '../../configs/game'
import { getContainerProps } from './container.helpers';


const ShapeContainer = () => {
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
    <group>
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
}

export default ShapeContainer