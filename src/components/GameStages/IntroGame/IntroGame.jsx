import { useEffect, useState } from 'react'
import useStore from '../../../store/useStore'
import CreatePuppet from './CreatePuppet'
import { GAME_STAGES } from '../../../configs/constants'
import { INTRO_PUPPETS } from './introGame.configs'


const IntroGame = () => {
  const { gameStage, setGameStage } = useStore((state) => state)
  const [puppets, setPuppets] = useState([])

  useEffect(() => {
    if (gameStage !== GAME_STAGES.IntroGame) {
      return 
    }

    let intervalId
    let _puppetCount = 0
    const _puppetMax = INTRO_PUPPETS.length
    const spawnPuppet = () => {
      const _newPuppet = INTRO_PUPPETS[_puppetCount]
      setPuppets(puppets => [...puppets, _newPuppet])
      _puppetCount += 1;
      if (_puppetCount === _puppetMax) {
        clearInterval(intervalId)
      }
    }
    intervalId = setInterval(spawnPuppet, 250)
    return () => clearInterval(intervalId)
  }, [])


  const handleOnClick = () => {
    setGameStage(GAME_STAGES.IntroLevel)
  }

  if (gameStage !== GAME_STAGES.IntroGame) {
    return null
  }


  return (
    <group onClick={handleOnClick}>
      { puppets.length && puppets.map(({ type, props, key }) => CreatePuppet({
          type, 
          props: {...props},
          key
        }))
      }
    </group>
  )
}


export default IntroGame;