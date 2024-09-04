import useStore from '../../../store/useStore'
import { SHAPE_WIDTH_HEIGHT } from '../../../configs/shape'
import { GAME_STAGES } from '../../../configs/game'
import { useEffect } from 'react'


const IntroLevel = () => {
  const { spawnShape, gameStage, setGameStage, containerHeight } = useStore((state) => state)

  useEffect(() => {
    if (gameStage !== GAME_STAGES.IntroLevel) {
      return
    }

    let shapeCount = 3
    const xOffsetIncrement = SHAPE_WIDTH_HEIGHT * 1.05
    const startX = -xOffsetIncrement
    const spawnIntroShape = () => {
      const offsetX = startX + (3 - shapeCount) * xOffsetIncrement
      spawnShape({ x: offsetX, y: containerHeight - SHAPE_WIDTH_HEIGHT}) 
      shapeCount -= 1;
      if (!shapeCount) {
        clearInterval(intervalId)
        setGameStage(GAME_STAGES.PlayLevel)
      }
    }
    const intervalId = setInterval(spawnIntroShape, 500)
    return () => clearInterval(intervalId)
  }, [gameStage])

  
  return null
}


export default IntroLevel;