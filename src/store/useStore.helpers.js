import { SHAPE } from '../configs/constants'

export const getShapeProps = ({
  shapeLevel,
  shapeId,
  dropPosition
 }) => {
  const _shapeIndex = shapeId % 3
  const _shapeType = (SHAPE.levels[shapeLevel])[_shapeIndex]
  return {
    type: _shapeType,
    props: { 
      ...SHAPE.geometryArgs[_shapeType],
      color: SHAPE.colors[_shapeIndex],
      name: shapeId,
      dropPosition
    },
    key: shapeId,
  }

 }

 