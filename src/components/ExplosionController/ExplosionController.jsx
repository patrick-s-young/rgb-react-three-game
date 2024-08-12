import useStore from '../../store/useStore'
import { useState, useEffect } from 'react'
import CreateExplosion from '../CreateExplosion/CreateExplosion'


const ExplosionController = () => {
  const [loading, setLoading] = useState(true)
  const [explosions, _] = useState([
    { 
      chunkType: 'boxChunk',
      color: '#ff0000',
      name: '77', 
      startPosition: [0, 18, 0]
    }
  ])
  // const { explosions } = useStore((state) => state)

  // if (Object.keys(explosions).length === 0) {
  //   return null
  // }

  //const [key, position] = Object.entries(explosions)[0]

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <group>
      {!loading && explosions.map(({chunkType, color, name, startPosition }) => 
        <CreateExplosion
          chunkType={chunkType}
          color={color}
          name={name}
          startPosition={startPosition}
          key={name}
        />
      )}
    </group>
  )
}

export default ExplosionController