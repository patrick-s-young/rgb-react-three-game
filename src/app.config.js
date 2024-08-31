

export const CONTAINER_WIDTH = 10
export const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .33 * 0.9
const CHUNK_WIDTH_HEIGHT = SHAPE_WIDTH_HEIGHT * 0.5
const CHUNK_START_POSITION_OFFSET = CHUNK_WIDTH_HEIGHT * 0.5

export const COLLISION_GROUPS = {
  CONTAINER: 2 ** 0,
  SHAPE: 2 ** 1,
  CHUNK: 2 ** 2,
  CHUNK_CONTAINER: 2 ** 3
}

export const CONTAINER = {
  width: CONTAINER_WIDTH,
  depth: CONTAINER_WIDTH * .33,
  wallThickness: .5,
}

export const SHAPE = {
  colors: ['#ff0000', '#00ff00', '#0000ff'],
  widthHeight: SHAPE_WIDTH_HEIGHT,
  levels: {
    'spheres': ['sphere', 'sphere', 'sphere'],
    'boxes': ['box', 'box', 'box'],
    'sphereBoxSphere': ['sphere', 'box', 'sphere'],
    'boxSphereBox': ['box', 'sphere', 'box']
  },
  geometryArgs: {
    'sphere': { radius: [SHAPE_WIDTH_HEIGHT * .5]},
    'box': { size: [SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT]}
  }
}

export const LEVEL_ORDER = ['spheres', 'boxes', 'sphereBoxSphere', 'boxSphereBox']

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
    'boxChunk': [CHUNK_WIDTH_HEIGHT, CHUNK_WIDTH_HEIGHT, CHUNK_WIDTH_HEIGHT]
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
    [-2.5, 10, 5],
    [2.5, 10, 5],
    [2.5, 5, 5],
    [-2.5, 5, 5]
  ],
}

export const GAME_STAGES = {
  IntroGame: 'IntroGame',
  SelectLevel: 'SelectLevel',
  IntroLevel: 'IntroLevel',
  PlayLevel: 'PlayLevel',
  WinLevel: 'WinLevel'
}

