import Sphere from './Sphere'
import Box from './Box'

const SHAPES = {
  'sphere': ({ props, key }) => <Sphere {...props} key={key}/>,
  'box': ({ props, key }) => <Box {...props} key={key}/>
}

const CreateShape = ({
  type,
  props,
  key }) => SHAPES[type]({props, key})

export default CreateShape