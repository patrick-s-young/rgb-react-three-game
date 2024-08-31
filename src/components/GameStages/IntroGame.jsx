import useStore from '../../store/useStore'
import { GAME_STAGES } from '../../app.config'

const IntroGame = () => {
  const { gameStage, setGameStage } = useStore((state) => state)

  if (gameStage !== GAME_STAGES.IntroGame) {
    return null
  }
 console.log('IntroGame Active')
  const handleClickStart = () => {
    setGameStage(GAME_STAGES.IntroLevel)
  }

  return null
}


export default IntroGame;