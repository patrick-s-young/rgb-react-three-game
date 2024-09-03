import SphereShape from './SphereShape'
import BoxShape from './BoxShape'
import OctagonShape from './OctagonShape'

const SHAPES = {
  'sphere': ({ props, key }) => <SphereShape {...props} key={key}/>,
  'box': ({ props, key }) => <BoxShape {...props} key={key}/>,
  'octagon': ({ props, key }) => <OctagonShape {...props} key={key}/>
}

const CreateShape = ({
  type,
  props,
  key }) => SHAPES[type]({props, key})

export default CreateShape