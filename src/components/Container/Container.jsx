import { useRgbStore } from '../../store/rgbStore'
import { ContainerWall } from './ContainerWall'
import { forwardRef } from 'react';

const containerWallProps = {
  bottom: { size: [], position: [0, 0, 0], key: 'C01', name: 'bottom'},
  left: { size: [], position: [], key: 'C02', name: 'left'},
  right: { size: [], position: [],  key: 'C03', name: 'left'},
  back: { size: [], position: [],  key: 'C04', name: 'back'},
  front: { size: [], position: [],  key: 'C05', name: 'front'}
}

const Container = forwardRef((props, ref) => {
  const { containerWidth, containerHeight,  containerDepth, containerThickness } = useRgbStore((state) => state)
  // bottom
  containerWallProps.bottom.size = [
    containerWidth + containerThickness, 
    containerThickness,  
    containerDepth]
  // left
  containerWallProps.left.size = [
    containerThickness, 
    containerHeight,  
    containerDepth]
  containerWallProps.left.position = [
    -containerWidth * .5, 
    containerHeight * .5, 
    0]
  // right
  containerWallProps.right.size = [
    containerThickness, 
    containerHeight,  
    containerDepth]
  containerWallProps.right.position = [
    containerWidth * .5, 
    containerHeight * .5, 
    0]
  // back
  containerWallProps.back.size = [
    containerWidth, 
    containerHeight,  
    containerThickness]
  containerWallProps.back.position = [
    0, 
    containerHeight * .5, 
    -containerDepth * .5]
  // front
  containerWallProps.front.size = [
    containerWidth, 
    containerHeight,  
    containerThickness]
  containerWallProps.front.position = [
    0, 
    containerHeight * .5, 
    containerDepth * .5]

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

export default Container