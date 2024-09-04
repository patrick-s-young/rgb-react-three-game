import useStore from '../../../store/useStore'
import { useEffect } from 'react'
import { GAME_STAGES } from '../../../configs/game'

const PlayLevel = () => {
  const { gameStage, setGameStage, containerHeight, shapesBoxHeight } = useStore((state) => state)


  useEffect(() => {

    if (gameStage !== GAME_STAGES.PlayLevel) {
      return
    }

    if (shapesBoxHeight > containerHeight ) {
      setGameStage(GAME_STAGES.WinLevel)
    }

  }, [gameStage, shapesBoxHeight, containerHeight])


  return null // shapesBoxHeight indicator?
}


export default PlayLevel;