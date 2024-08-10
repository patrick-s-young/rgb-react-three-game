import Sphere from './Sphere'

const SHAPES = {
  'sphere': ({ props, key }) => <Sphere {...props} key={key}/>
}


const CreateShape = ({
  type,
  props,
  key
}) => SHAPES[type]({props, key})

export default CreateShape