import IntroGame from './IntroGame/IntroGame'
import SelectLevel from './SelectLevel/SelectLevel'
import IntroLevel from './IntroLevel/IntroLevel'
import PlayLevel from './PlayLevel/PlayLevel'
import WinLevel from './WinLevel/WinLevel'


const GameStages = () => {
  
  return (
    <>
      <IntroGame/>
      {/* <SelectLevel/> */}
      <IntroLevel/>
      <PlayLevel/>
      <WinLevel/>
    </>
  )

}

export default GameStages