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
const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .32
const CONTAINER_THICKNESS = .5

export const useRgbStore = create((set) => ({
  gameStage: GAME_STAGES.INIT,
  shapeWidthHeight: SHAPE_WIDTH_HEIGHT,
  containerWidth: CONTAINER_WIDTH,
  containerHeight: undefined,
  containerDepth: SHAPE_WIDTH_HEIGHT,
  containerThickness: CONTAINER_THICKNESS,
  screenOrientation: undefined,
  setScreen: ({ width, height, orientation }) => set((state) => ({ 
    containerHeight: height / width * state.containerWidth,
    orientation,
   }))
  })
)