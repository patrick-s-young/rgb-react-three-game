import { useRgbStore } from '../../store/rgbStore'
import CreateShape from '../CreateShape/CreateShape'


const ShapeController = () => {
  const { shapes } = useRgbStore((state) => state)

  return (
    <group>
      {shapes.map((item) => CreateShape({...item}))}
    </group>

  )
}

export default ShapeController