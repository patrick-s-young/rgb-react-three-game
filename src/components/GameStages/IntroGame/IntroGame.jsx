import { useEffect, useState } from 'react'
import useStore from '../../../store/useStore'
import LetterBox from './LetterBox'
import { GAME_STAGES, SHAPE_WIDTH_HEIGHT } from '../../../app.config'

const boxSize = new Array(3).fill(SHAPE_WIDTH_HEIGHT)
const LETTER_PROPS = [
  { character: 'R', color: '#ff0000', size: boxSize, offsetX: .4},
  { character: 'G', color: '#00ff00', size: boxSize, offsetX: 0 },
  { character: 'B', color: '#0000ff', size: boxSize, offsetX: 0 }
]

const IntroGame = () => {
  const { gameStage, setGameStage, containerHeight } = useStore((state) => state)
  const [letters, setLetters] = useState([])

  useEffect(() => {
    if (gameStage !== GAME_STAGES.IntroGame) {
      return 
    }
    let letterCount = 3
    const xOffsetIncrement = SHAPE_WIDTH_HEIGHT * 1.05
    const startX = -xOffsetIncrement
    const spawnIntroLetter = () => {
      const offsetX = startX + (3 - letterCount) * xOffsetIncrement
      const _letterProps = LETTER_PROPS[3 - letterCount]
      _letterProps.position = [offsetX, containerHeight - SHAPE_WIDTH_HEIGHT, 0]
  
      setLetters(letters => [...letters, _letterProps])
      letterCount -= 1;
      if (!letterCount) {
        clearInterval(intervalId)
      }
    }
    const intervalId = setInterval(spawnIntroLetter, 500)
    return () => clearInterval(intervalId)
  }, [])


  const handleOnClick = () => {
    setGameStage(GAME_STAGES.IntroLevel)
  }

  if (gameStage !== GAME_STAGES.IntroGame) {
    return null
  }


  return (
    <>
      {letters.map(item => 
        <LetterBox
          {...item}
          key={item.color}
          onClick={handleOnClick}
        />
      )}
    </>
  )
}


export default IntroGame;