
const CONTAINER_WIDTH = 10
const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .33 * .8
const CHUNK_WIDTH_HEIGHT = SHAPE_WIDTH_HEIGHT * .5

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

export const EXPLOSION = {
  chunkGeometryArgs: {
    'sphereChunk': { radius: [CHUNK_WIDTH_HEIGHT * .25]},
    'boxChunk': { size: [CHUNK_WIDTH_HEIGHT, CHUNK_WIDTH_HEIGHT, CHUNK_WIDTH_HEIGHT]}
  }
}

export const GAME_STAGES = {
  INIT: 'INIT',
  MENU: 'MENU',
  PLAY: 'PLAY',
  WIN: 'WIN',
  LOSE: 'LOSE',
  PAUSE: 'PAUSE'
}