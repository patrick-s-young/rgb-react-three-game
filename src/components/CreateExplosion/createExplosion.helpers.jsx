import { EXPLOSION } from '../../app.config'

export const getChunkProps = ({
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

 