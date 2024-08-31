import IntroGame from './IntroGame'
import SelectLevel from './SelectLevel'
import IntroLevel from './IntroLevel'
import PlayLevel from './PlayLevel'
import WinLevel from './WinLevel'


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