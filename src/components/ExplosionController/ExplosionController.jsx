import useStore from '../../store/useStore'
import CreateExplosion from '../CreateExplosion/CreateExplosion'


const ExplosionController = () => {
  const { explosions, removeExplosion } = useStore((state) => state)

  const handleRemoveExplosion = (name) => {
    removeExplosion(name)
  }

  return (
    <group>
      {Object.values(explosions).map(({chunkType, color, name, startPosition }) => 
        <CreateExplosion
          chunkType={chunkType}
          color={color}
          name={name}
          startPosition={startPosition}
          key={name}
          handleRemoveExplosion={handleRemoveExplosion}
        />
      )}
    </group>
  )
}

export default ExplosionController