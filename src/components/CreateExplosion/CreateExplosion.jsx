import CreateChunk from './CreateChunk'
import { EXPLOSION } from '../../app.config'
import { useState } from 'react'

const CreateExplosion = ({
  chunkType, 
  color,
  name,
  startPosition
}) => {
  const [posX, posY, posZ] = startPosition
  const [chunks, _ ] = useState(
    () => {
    const _chunks = []
    for (let index = 0; index < 4; index++) {
      _chunks.push(
        {
          chunkType,
          props: {
            color,
            name: `${index}_${name}`,
            startPosition: [posX + index * .25, posY + index * .25, posZ + 1 + index * .25],
            ...EXPLOSION.chunkGeometryArgs[chunkType]
          },
          key: `${index}_${name}`,
        }
      )
    }
    
    
  
  
    return _chunks
})
   

  console.log('chunks', chunks)

    return (
      <group>
        {chunks.map(({ chunkType, props, key }) => CreateChunk({ chunkType, props, key}))}
      </group>
    )

  }

  export default CreateExplosion