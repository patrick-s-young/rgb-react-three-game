import { useRgbStore } from '../../store/rgbStore'
import { useEffect } from 'react'

export const ScreenSettings = () => {
  const setScreen = useRgbStore(state => state.setScreen);

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