import { create } from 'zustand'
import { CONTAINER } from '../configs/container'
import { GAME_STAGES, LEVEL_ORDER } from '../configs/game'
import { getShapeProps } from './useStore.helpers'

const useStore = create(
  (set) => ({
    gameStage: GAME_STAGES.IntroGame,
    // container
    containerDepth: CONTAINER.depth,
    containerHeight: undefined,
    containerThickness: CONTAINER.wallThickness,
    containerWidth: CONTAINER.width,
    // exposions
    explosions: {},
    // shapes
    shapes: [],
    shapesBoxHeight: 0,
    shapeId: 2,
    levelIndex: 0,
    setShapesBoxHeight: (boxHeight) => set({ shapesBoxHeight: boxHeight }),
    spawnShape: ({x, y}) => {
      set((state) => {
        const _shapeId = state.shapeId + 1
        const _shapeProps = getShapeProps({ 
          shapeLevel: LEVEL_ORDER[state.levelIndex], 
          shapeId: _shapeId,
          position: [x, y, 0] })
        return { shapes: [...state.shapes, _shapeProps], shapeId: _shapeId}
      })
    },
    removeShape: ({ name, position, color, chunkType }) => { 
      set((state) => ({ shapes: [...state.shapes.filter(item => item.props.name !== name)]}))
      set((state) => {
        if (state.explosions[`explode${name}`]) {
          return { explosions: {...state.explosions}}
        }
        return { explosions: {...state.explosions, 
          [`explode${name}`]: {
            startPosition: position,
            name: `explode${name}`,
            color,
            chunkType
          }
        }}
      })
    },
    removeExplosion: (name) => {
      set((state) => { 
        const _explosions = state.explosions
        delete _explosions[name]
        return { explosions: {..._explosions}}
      })
    },
    // device
    screenOrientation: undefined,
    setScreen: ({ width, height, orientation }) => set((state) => ({ 
      containerHeight: height / width * state.containerWidth,
      orientation,
    })),
    setGameStage: (gameStage) => {
      if (gameStage === GAME_STAGES.IntroLevel) {
        set((state) => {
          let _levelIndex = state.levelIndex + 1
          _levelIndex = (_levelIndex + LEVEL_ORDER.length) % LEVEL_ORDER.length
          return { levelIndex: _levelIndex }
        })
      }
      set({ gameStage })
    }
  })
)


export default useStore