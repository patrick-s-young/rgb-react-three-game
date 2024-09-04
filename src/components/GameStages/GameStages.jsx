import IntroGame from './IntroGame/IntroGame'
import IntroLevel from './IntroLevel/IntroLevel'
import PlayLevel from './PlayLevel/PlayLevel'
import WinLevel from './WinLevel/WinLevel'


const GameStages = () => {
  
  return (
    <>
      <IntroGame/>
      <IntroLevel/>
      <PlayLevel/>
      <WinLevel/>
    </>
  )

}

export default GameStages