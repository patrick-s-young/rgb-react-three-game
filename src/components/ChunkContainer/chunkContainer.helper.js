

export const getChunkContainerProps = ({
  containerWidth, 
  containerHeight,  
  containerDepth, 
  containerThickness
}) => ({
  left: {
    size: [
      containerThickness, 
      containerHeight,  
      containerDepth * 2
    ],
    position: [
      -containerWidth * .5, 
      containerHeight * .5, 
      containerDepth * 1.5
    ]
  },
  right: {
    size: [
      containerThickness, 
      containerHeight,  
      containerDepth * 2
    ],
    position: [
      containerWidth * .5, 
      containerHeight * .5, 
      containerDepth * 1.5
    ]
  }
})