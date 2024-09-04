import { CHUNK } from '../../configs/chunk'

export const getChunkProps = ({
  chunkType,
  chunkIndex,
  color,
  name,
  startPosition
 }) => {
  return {
    chunkType,
    props: { 
      angularVelocity: CHUNK.angularVelocity[chunkIndex],
      args: CHUNK.args[chunkType],
      collisionFilterGroup: CHUNK.collisionFilterGroup, 
      collisionFilterMask: CHUNK.collisionFilterMask,
      color,
      mass: CHUNK.mass,
      name: `${name}_${chunkIndex}`,
      position: CHUNK.position({ startPosition, chunkIndex }),
      velocity: CHUNK.velocity[chunkIndex]
    },
    key: `${name}_${chunkIndex}`,
  }

 }

 