import PuppetBox from './PuppetBox'
import PuppetLetter from './PuppetLetter'
import PuppetSphere from './PuppetSphere'

const PUPPETS = {
  'puppetLetter': ({ props, key }) => <PuppetLetter {...props} key={key}/>,
  'puppetBox': ({ props, key }) => <PuppetBox {...props} key={key}/>,
  'puppetSphere': ({ props, key }) => <PuppetSphere {...props} key={key}/>
}

const CreatePuppet = ({
  type,
  props,
  key }) => PUPPETS[type]({props, key})

export default CreatePuppet