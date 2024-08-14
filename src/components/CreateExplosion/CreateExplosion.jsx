import CreateChunk from './CreateChunk'
import { getChunkProps } from './createExplosion.helpers'
import { useState, useEffect } from 'react'

const REMOVE_CHUNK_MIN_Y = -4;

const CreateExplosion = ({
  chunkType, 
  color,
  name,
  startPosition,
  handleRemoveExplosion }) => {
  const [chunks, setChunks ] = useState(
    () => {
      const _chunks = []
      for (let chunkIndex = 0; chunkIndex < 4; chunkIndex++) {
        const _chunkProps = getChunkProps({
          chunkType,
          chunkIndex,
          color,
          name,
          startPosition
        })
        _chunkProps.props.handleRemoveChunk = handleRemoveChunk
        _chunks.push({..._chunkProps})
      }
      return _chunks
    }
  )

  function handleRemoveChunk ({ chunkPosition, chunkName }) {
    const [ _x, _y, _z ] = chunkPosition
    if (_y < REMOVE_CHUNK_MIN_Y) {
      setChunks(chunks => chunks.filter(item => item.props.name !== chunkName))
    }
  }

  useEffect(() => {
    if (chunks.length === 0) {
      handleRemoveExplosion(name)
    }
  }, [chunks])

  return (
    <group>
      {chunks.map(({ chunkType, props, key }) => CreateChunk({ chunkType, props, key}))}
    </group>
  )
}

export default CreateExplosion