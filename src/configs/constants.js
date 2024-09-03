import * as THREE from 'three'

const octQuaternion_rotateX = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2)
const octQuaternion_rotateY = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 8)
export const OCT_QUATERNION = new THREE.Quaternion().multiplyQuaternions(octQuaternion_rotateX, octQuaternion_rotateY).toArray()

export const CONTAINER_WIDTH = 10
export const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .33 * 0.9
export const OCTAGON_RADIUS = SHAPE_WIDTH_HEIGHT * 0.54
const CHUNK_WIDTH_HEIGHT = SHAPE_WIDTH_HEIGHT * 0.5
const CHUNK_START_POSITION_OFFSET = CHUNK_WIDTH_HEIGHT * 0.5

export const COLORS = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#3381ff'
}

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
  colors: [COLORS.red, COLORS.green, COLORS.blue],
  widthHeight: SHAPE_WIDTH_HEIGHT,
  levels: {
    'octagons': ['octagon', 'octagon', 'octagon'],
    'octBoxSphere': ['octagon', 'box', 'sphere'],
    'spheres': ['sphere', 'sphere', 'sphere'],
    'boxes': ['box', 'box', 'box'],
    'sphereBoxSphere': ['sphere', 'box', 'sphere'],
    'boxSphereBox': ['box', 'sphere', 'box']
  },
  geometryArgs: {
    'sphere': { args: [SHAPE_WIDTH_HEIGHT * .5]},
    'box': { args: [SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT]},
    'octagon': { args: [SHAPE_WIDTH_HEIGHT * .5, SHAPE_WIDTH_HEIGHT * .5, SHAPE_WIDTH_HEIGHT, 8]}
  }
}

export const LEVEL_ORDER = ['octagons', 'octBoxSphere', 'boxes', 'spheres', 'boxSphereBox', 'sphereBoxSphere']

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
    [-2.5, 15, 19],
    [2.5, 16, 20],
    [2.5, 5, 9],
    [-2.5, 5, 10]
  ],
}

export const GAME_STAGES = {
  IntroGame: 'IntroGame',
  SelectLevel: 'SelectLevel',
  IntroLevel: 'IntroLevel',
  PlayLevel: 'PlayLevel',
  WinLevel: 'WinLevel'
}

