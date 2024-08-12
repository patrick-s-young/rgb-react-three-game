import useStore from '../../store/useStore'
import CreateShape from '../CreateShape/CreateShape'


const ShapeController = () => {
  const { shapes, removeShape } = useStore((state) => state)

  const handleOnCollide = (e) => {
    if (e.body?.isShape && e.body.color === e.target.color)  {
      removeShape({ name: e.target.name, position: Object.values(e.target.position) }) 
    }
  }

  return (
    <group>
      { shapes.map(({ type, props, key }) => CreateShape({
          type, 
          props: {...props, handleOnCollide},
          key
        })
      )}
    </group>
  )
}

export default ShapeController