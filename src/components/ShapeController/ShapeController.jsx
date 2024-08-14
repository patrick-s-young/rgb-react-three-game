import useStore from '../../store/useStore'
import CreateShape from '../CreateShape/CreateShape'


const ShapeController = () => {
  const { shapes, removeShape } = useStore((state) => state)

  const handleRemoveShape = ({ name, position, color, chunkType }) => {
    removeShape({ 
      name, 
      position,
      color,
      chunkType
    }) 
  }

  return (
    <group>
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