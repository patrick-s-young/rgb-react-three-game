import { COLLISION_GROUPS } from "./physics"
import { SHAPE_WIDTH_HEIGHT } from "./shape"

const CHUNK_WIDTH_HEIGHT = SHAPE_WIDTH_HEIGHT * 0.5
const CHUNK_START_POSITION_OFFSET = CHUNK_WIDTH_HEIGHT * 0.5

export const CHUNK = {
  angularVelocity: [
    [-2.5, 8, 8],
    [2.5, 10, 5],
    [3.5, 15, 4],
    [-2.5, 5, 3]
  ],
  collisionFilterGroup: COLLISION_GROUPS.CHUNK,
  collisionFilterMask: COLLISION_GROUPS.CHUNK | COLLISION_GROUPS.CHUNK_CONTAINER,
  args: {
    'sphereChunk': [CHUNK_WIDTH_HEIGHT * .25],
    'boxChunk': [CHUNK_WIDTH_HEIGHT, CHUNK_WIDTH_HEIGHT, CHUNK_WIDTH_HEIGHT],
    'octagonChunk': [CHUNK_WIDTH_HEIGHT * .5, CHUNK_WIDTH_HEIGHT * .5, CHUNK_WIDTH_HEIGHT, 8]
  },
  position: ({ startPosition, chunkIndex }) => {
    const [ x, y, z ] = startPosition
    const _positions = [
      [ x - CHUNK_START_POSITION_OFFSET, y + CHUNK_START_POSITION_OFFSET, z + CHUNK_START_POSITION_OFFSET ],
      [ x + CHUNK_START_POSITION_OFFSET, y + CHUNK_START_POSITION_OFFSET, z + CHUNK_START_POSITION_OFFSET ],
      [ x + CHUNK_START_POSITION_OFFSET, y - CHUNK_START_POSITION_OFFSET, z + CHUNK_START_POSITION_OFFSET ],
      [ x - CHUNK_START_POSITION_OFFSET, y - CHUNK_START_POSITION_OFFSET, z + CHUNK_START_POSITION_OFFSET ]
    ]
    return _positions[chunkIndex]
  }, 
  mass: 1,
  velocity: [
    [-2.5, 15, 19],
    [2.5, 16, 20],
    [2.5, 5, 9],
    [-2.5, 5, 10]
  ],
}