

export const getContainerProps = ({
  containerWidth, 
  containerHeight,  
  containerDepth, 
  containerThickness
}) => ({
  bottom: {
    size: [
      containerWidth + containerThickness, 
      containerThickness,  
      containerDepth + 1
    ],
    position: [
      0,
      0,
      0
    ]
  },
  left: {
    size: [
      containerThickness, 
      containerHeight,  
      containerDepth
    ],
    position: [
      -containerWidth * .5, 
      containerHeight * .5, 
      0
    ]
  },
  right: {
    size: [
      containerThickness, 
      containerHeight,  
      containerDepth
    ],
    position: [
      containerWidth * .5, 
      containerHeight * .5, 
      0
    ]
  },
  back: {
    size: [
      containerWidth, 
      containerHeight,  
      containerThickness
    ],
    position: [
      0, 
      containerHeight * .5, 
      -containerDepth * .6     
    ]
  },
  front: {
    size: [
      containerWidth, 
      containerHeight,  
      containerThickness
    ],
    position: [
      0, 
      containerHeight * .5, 
      containerDepth * .6    
    ]
  }
})