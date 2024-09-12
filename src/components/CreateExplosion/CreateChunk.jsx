import SquareChunk from "./squareChunk";
import SphereChunk from "./SphereChunk";
import OctagonChunk from "./OctagonChunk";
import CircleChunk from "./CircleChunk";
import TriangleChunk from './TriangleChunk'

const CHUNKS = {
  'sphereChunk': ({ props, key }) => <SphereChunk {...props} key={key}/>,
  'squareChunk': ({ props, key }) => <SquareChunk {...props} key={key}/>,
  'octagonChunk': ({ props, key }) => <OctagonChunk {...props} key={key}/>,
  'circleChunk': ({ props, key }) => <CircleChunk {...props} key={key}/>,
  'triangleChunk': ({ props, key }) => <TriangleChunk {...props} key={key}/>
}

const CreateChunk = ({
  chunkType,
  props,
  key }) => CHUNKS[chunkType]({props, key})

export default CreateChunk