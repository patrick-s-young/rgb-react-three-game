import { useRgbStore } from '../../store/rgbStore'
import { ContainerWall } from './ContainerWall'
import { forwardRef } from 'react';

const containerWallProps = {
  bottom: { size: [], position: [0, 0, 0], key: 'C01', name: 'bottom'},
  left: { size: [], position: [], key: 'C02', name: 'left'},
  right: { size: [], position: [],  key: 'C03', name: 'left'}
}

export const Container = forwardRef((props, ref) => {
  const { containerWidth, containerHeight,  containerDepth, containerThickness } = useRgbStore((state) => state)
  containerWallProps.bottom.size = [containerWidth + containerThickness, containerThickness,  containerDepth]
  containerWallProps.left.size = [containerThickness, containerHeight,  containerDepth]
  containerWallProps.left.position = [-containerWidth * .5, containerHeight * .5, 0]
  containerWallProps.right.size = [containerThickness, containerHeight,  containerDepth]
  containerWallProps.right.position = [containerWidth * .5, containerHeight * .5, 0]

  return (
    <group ref={ref}>
      {Object.keys(containerWallProps).map((wallName) => {
        const { size, position, key } = containerWallProps[wallName]
        return (
        <ContainerWall
          size={size}
          position={position}
          key={key}
          name={wallName}
        /> 
        )
      })
    }
    </group>
  )
})