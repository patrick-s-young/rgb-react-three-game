import { v4 as uuidv4 } from 'uuid';
import { SHAPE_WIDTH_HEIGHT, COLORS, CONTAINER_WIDTH } from '../../../configs/constants'

const boxSize = new Array(3).fill(SHAPE_WIDTH_HEIGHT)
const sphereRadius = [SHAPE_WIDTH_HEIGHT * 0.5]
const xOffsetIncrement = SHAPE_WIDTH_HEIGHT * 1.03
const yMin = 2.5 * SHAPE_WIDTH_HEIGHT
const halfSpace = SHAPE_WIDTH_HEIGHT * 0.5
const GRID = {
  col: { 
    _1: -xOffsetIncrement,
    _2: 0,
    _3: xOffsetIncrement
  },
  row: {
    _10: yMin + 6 * SHAPE_WIDTH_HEIGHT,
    _9: yMin + 5 * SHAPE_WIDTH_HEIGHT,
    _8: yMin + 4 * SHAPE_WIDTH_HEIGHT,
    _7: yMin + 3 * SHAPE_WIDTH_HEIGHT,
    _6: yMin + 3 * SHAPE_WIDTH_HEIGHT,
    _5: yMin + 2 * SHAPE_WIDTH_HEIGHT,
    _4: yMin + SHAPE_WIDTH_HEIGHT,
    _3: yMin,
  }
}
const startX = -xOffsetIncrement
const startY = screen.height / screen.width * CONTAINER_WIDTH 

export const INTRO_PUPPETS = [

  // wave 1
  { type: 'puppetSphere',
    props: { color: COLORS.red, radius: sphereRadius, position: [GRID.col._1, GRID.row._3, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.green, size: boxSize, position: [GRID.col._2, GRID.row._3, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.blue, size: boxSize, position: [GRID.col._3, GRID.row._3, 0]},
    key: uuidv4()
  },


  // wave 2
  { type: 'puppetBox',
    props: { color: COLORS.red, size: boxSize, position: [GRID.col._2, GRID.row._4, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.green, radius: sphereRadius, position: [GRID.col._3, GRID.row._4, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.blue, size: boxSize, position: [GRID.col._1, GRID.row._4, 0]},
    key: uuidv4()
  },


  // wave 3
  { type: 'puppetLetter',
    props: { character: 'R', color: COLORS.red, size: boxSize, position: [GRID.col._1, GRID.row._5, 0], offsetX: .3 },
    key: uuidv4()
  },
  { type: 'puppetLetter',
    props: { character: 'G', color: COLORS.green, size: boxSize, position: [GRID.col._2,  GRID.row._5, 0], offsetX: -.2 },
    key: uuidv4()
  },
  { type: 'puppetLetter',
    props: { character: 'B', color: COLORS.blue, size: boxSize, position: [GRID.col._3,  GRID.row._5, 0], offsetX: -.2 },
    key: uuidv4()
  },


  // wave 4
  { type: 'puppetBox',
    props: { color: COLORS.red, size: boxSize,  position: [GRID.col._3, GRID.row._6, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.green, size: boxSize,  position: [GRID.col._1, GRID.row._6, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.blue, radius: sphereRadius, position: [GRID.col._2, GRID.row._6, 0]},
    key: uuidv4()
  },

  // wave 5
  { type: 'puppetBox',
    props: { color: COLORS.red, size: boxSize, position: [GRID.col._2, GRID.row._8, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.green, radius: sphereRadius, position: [GRID.col._3, GRID.row._7 + halfSpace, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.blue, radius: sphereRadius, position: [GRID.col._1, GRID.row._7 + halfSpace, 0]},
    key: uuidv4()
  },

  // wave 6
    { type: 'puppetLetter',
      props: { character: 'R', color: COLORS.red, size: boxSize, position: [GRID.col._1, GRID.row._9, 0], offsetX: .3 },
      key: uuidv4()
    },
    { type: 'puppetLetter',
      props: { character: 'G', color: COLORS.green, size: boxSize, position: [GRID.col._2,  GRID.row._8, 0], offsetX: -.2 },
      key: uuidv4()
    },
    { type: 'puppetLetter',
      props: { character: 'B', color: COLORS.blue, size: boxSize, position: [GRID.col._3,  GRID.row._8, 0], offsetX: -.2 },
      key: uuidv4()
    },

  // wave 7
  { type: 'puppetBox',
    props: { color: COLORS.red, size: boxSize,  position: [GRID.col._3, GRID.row._9, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.green, size: boxSize,  position: [GRID.col._1, GRID.row._9, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.blue, radius: sphereRadius, position: [GRID.col._2, GRID.row._9, 0]},
    key: uuidv4()
  },
]

