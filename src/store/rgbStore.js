import { create } from 'zustand'

const GAME_STAGES = {
  INIT: 'INIT',
  MENU: 'MENU',
  PLAY: 'PLAY',
  WIN: 'WIN',
  LOSE: 'LOSE',
  PAUSE: 'PAUSE'
}

const CONTAINER_WIDTH = 10
const CONTAINER_DEPTH = CONTAINER_WIDTH * .30
const CONTAINER_WALL_THICKNESS = .5
const SHAPE_WIDTH_HEIGHT = CONTAINER_DEPTH * .75
const SHAPE_COLORS = ['#ff0000', '#00ff00', '#0000ff']


export const useRgbStore = create((set) => ({
  // container
  containerDepth: CONTAINER_DEPTH,
  containerHeight: undefined,
  containerThickness: CONTAINER_WALL_THICKNESS,
  containerWidth: CONTAINER_WIDTH,
  // game state
  gameStage: GAME_STAGES.INIT,
  // shapes
  shapeWidthHeight: SHAPE_WIDTH_HEIGHT,
  shapes: [],
  shapeId: 2,
  spawnShape: () => {
    set((state) => {
      const _shapeId = state.shapeId +1
      const _sphereProps = getSphereProps({ 
        shapeId: _shapeId,
        dropPositionY: CONTAINER_WIDTH * 2
      })
      return { shapes: [...state.shapes, _sphereProps], shapeId: _shapeId}
    })
  },
  // device
  screenOrientation: undefined,
  setScreen: ({ width, height, orientation }) => set((state) => ({ 
    containerHeight: height / width * state.containerWidth,
    orientation,
   }))
  })
)

const getSphereProps = ({
  shapeId,
  dropPositionY
 }) => ({
  type: 'sphere',
  props: { 
    radius: [SHAPE_WIDTH_HEIGHT * .5], 
    dropPosition: [getDropX(), dropPositionY, 0],
    color: SHAPE_COLORS[shapeId % 3],
    name: shapeId
  },
  key: shapeId,
}) 

const getDropX = () => Math.random(5)