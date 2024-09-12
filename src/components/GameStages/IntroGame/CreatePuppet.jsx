import PuppetSquare from './PuppetSquare'
import PuppetLetter from './PuppetLetter'
import PuppetSphere from './PuppetSphere'
import PuppetOctagon from './PuppetOctagon'
import PuppetCircle from './PuppetCircle'
import PuppetTriangle from './PuppetTriangle'

const PUPPETS = {
  'puppetLetter': ({ props, key }) => <PuppetLetter {...props} key={key}/>,
  'puppetSquare': ({ props, key }) => <PuppetSquare {...props} key={key}/>,
  'puppetSphere': ({ props, key }) => <PuppetSphere {...props} key={key}/>,
  'puppetOctagon': ({ props, key }) => <PuppetOctagon {...props} key={key}/>,
  'puppetCircle': ({ props, key }) => <PuppetCircle {...props} key={key}/>,
  'puppetTriangle': ({ props, key }) => <PuppetTriangle {...props} key={key}/>
}

const CreatePuppet = ({
  type,
  props,
  key }) => PUPPETS[type]({props, key})

export default CreatePuppet