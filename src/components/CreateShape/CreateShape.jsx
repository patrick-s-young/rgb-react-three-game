import SphereShape from './SphereShape'
import BoxShape from './BoxShape'
import OctagonShape from './OctagonShape'
import CircleShape from './CircleShape'
import TriangleShape from './TriangleShape'

const SHAPES = {
  'sphere': ({ props, key }) => <SphereShape {...props} key={key}/>,
  'box': ({ props, key }) => <BoxShape {...props} key={key}/>,
  'octagon': ({ props, key }) => <OctagonShape {...props} key={key}/>,
  'circle': ({ props, key }) => <CircleShape {...props} key={key}/>,
  'triangle': ({ props, key }) => <TriangleShape {...props} key={key}/>
}

const CreateShape = ({
  type,
  props,
  key }) => SHAPES[type]({props, key})

export default CreateShape