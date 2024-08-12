import { create } from 'zustand'
import { CONTAINER } from '../app.config'
import { getShapeProps } from './useStore.helpers'

const useStore = create(
  (set) => ({
    // container
    containerDepth: CONTAINER.depth,
    containerHeight: undefined,
    containerThickness: CONTAINER.wallThickness,
    containerWidth: CONTAINER.width,
    // exposions
    explosions: {},
    // shapes
    shapes: [],
    shapeId: 2,
    shapeLevel: 'sphereBoxSphere',
    spawnShape: ({x, y}) => {
      set((state) => {
        const _shapeId = state.shapeId + 1
        const _shapeProps = getShapeProps({ 
          shapeLevel: state.shapeLevel, 
          shapeId: _shapeId,
          dropPosition: [x, y, 0] })
        return { shapes: [...state.shapes, _shapeProps], shapeId: _shapeId}
      })
    },
    removeShape: ({ name, position }) => { 
      set((state) => ({ shapes: [...state.shapes.filter(item => item.props.name !== name)]}))
      set((state) => {
        if (state.explosions[`explode${name}`]) {
          return { explosions: {...state.explosions}}
        }
        return { explosions: {...state.explosions, [`explode${name}`]:position }}
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


export default useStore