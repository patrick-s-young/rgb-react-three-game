import BoxChunk from "./BoxChunk";

const CHUNKS = {
  //'sphere': ({ props, key }) => <Sphere {...props} key={key}/>,
  'boxChunk': ({ props, key }) => <BoxChunk {...props} key={key}/>
}

const CreateChunk = ({
  chunkType,
  props,
  key }) => CHUNKS[chunkType]({props, key})

export default CreateChunk