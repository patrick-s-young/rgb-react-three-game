import useStore from '../../store/useStore'
import { GAME_STAGES } from '../../app.config'
import { useEffect } from 'react'

const WinLevel = () => {
  const { gameStage } = useStore((state) => state)

  useEffect(() => {

    if (gameStage === GAME_STAGES.WinLevel) {
      console.log('WinLevel Active')
    }

    // interval for exploding array of shapes

    // when shapes array is empty, setGameStage(GAME_STAGES.IntroLevel)

  }, [gameStage])

  if (gameStage !== GAME_STAGES.WinLevel) {
    return null
  }

  return null
}


export default WinLevel;