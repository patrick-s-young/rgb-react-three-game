import BoxChunk from "./BoxChunk";
import SphereChunk from "./SphereChunk";

const CHUNKS = {
  'sphereChunk': ({ props, key }) => <SphereChunk {...props} key={key}/>,
  'boxChunk': ({ props, key }) => <BoxChunk {...props} key={key}/>
}

const CreateChunk = ({
  chunkType,
  props,
  key }) => CHUNKS[chunkType]({props, key})

export default CreateChunk