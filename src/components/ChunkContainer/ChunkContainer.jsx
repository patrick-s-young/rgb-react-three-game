import useStore from '../../store/useStore'
import ChunkContainerWall from './ChunkContainerWall'
import { getChunkContainerProps } from './chunkContainer.helper'


const ChunkContainer = () => {
  const { containerWidth, containerHeight,  containerDepth, containerThickness } = useStore((state) => state)
  const _chunkContainerProps = getChunkContainerProps({
    containerWidth, 
    containerHeight,  
    containerDepth, 
    containerThickness
  })

  return (
    <group>
      {Object.keys(_chunkContainerProps).map((name) => {
        const { size, position } = _chunkContainerProps[name]
        return (
          <ChunkContainerWall
            size={size}
            position={position}
            key={name}
            name={name}
          /> 
        )
      })
    }
    </group>
  )
}

export default ChunkContainer