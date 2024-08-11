import useStore from '../../store/useStore'
import CreateShape from '../CreateShape/CreateShape'


const ShapeController = () => {
  const { shapes } = useStore((state) => state)

  return (
    <group>
      {shapes.map((item) => CreateShape({...item}))}
    </group>
  )
}

export default ShapeController