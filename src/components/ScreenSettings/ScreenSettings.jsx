import useStore from '../../store/useStore'
import { useEffect } from 'react'

const ScreenSettings = () => {
  const setScreen = useStore(state => state.setScreen);

  const handleUpdateScreenSettings = () => {
    setScreen({ 
      width: screen.width,
      height: screen.height,
      orientation: screen.orientation.type
     })
  }

  useEffect(() => {
    handleUpdateScreenSettings()
    screen.orientation.addEventListener('change', handleUpdateScreenSettings)
    return () => screen.orientation.removeEventListener('change', handleUpdateScreenSettings)
  }, [])

  return null
}

export default ScreenSettings