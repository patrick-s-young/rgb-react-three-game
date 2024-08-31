import useStore from '../../store/useStore'
import CreateShape from '../CreateShape/CreateShape'
import { Box3, Vector3 } from "three"
import { useEffect, useRef } from 'react'


const ShapeController = () => {
  const { shapes, removeShape, setShapesBoxHeight, containerHeight } = useStore((state) => state)
  const _groupRef = useRef(null)

  const handleRemoveShape = ({ name, position, color, chunkType }) => {
    removeShape({ 
      name, 
      position,
      color,
      chunkType
    }) 
  }

  useEffect(() => {
    const getShapesBoxHeight = () => {
      if (!_groupRef.current) {
        return
      }
      const _groupBox = new Box3().setFromObject(_groupRef.current);
      const _groupBoxSize = new Vector3();
      _groupBox.getSize(_groupBoxSize);
      setShapesBoxHeight(_groupBoxSize.y)
    }
    const intervalId = setInterval(getShapesBoxHeight, 3000)
    return () => clearInterval(intervalId)
  }, [])


  return (
    <group ref={_groupRef}>
      { shapes.map(({ type, props, key }) => CreateShape({
          type, 
          props: {...props, handleRemoveShape},
          key
        })
      )}
    </group>
  )
}

export default ShapeController