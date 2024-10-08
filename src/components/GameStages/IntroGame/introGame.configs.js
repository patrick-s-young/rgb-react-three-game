import { v4 as uuidv4 } from 'uuid';
import { 
  CIRCLE_RADIAL_SEGMENTS,
  CIRCLE_RADIUS, 
  OCTAGON_RADIAL_SEGMENTS,
  OCTAGON_RADIUS, 
  SHAPE_WIDTH_HEIGHT, 
  TRIANGLE_RADIAL_SEGMENTS,
  TRIANGLE_RADIUS,
 } from '../../../configs/shape'
import { COLORS } from '../../../configs/game'

const halfSpace = SHAPE_WIDTH_HEIGHT * 0.5
const xOffsetIncrement = SHAPE_WIDTH_HEIGHT * 1.1
const yMin = 2.5 * SHAPE_WIDTH_HEIGHT
const ARGS = {
  box: new Array(3).fill(SHAPE_WIDTH_HEIGHT),
  sphere: [SHAPE_WIDTH_HEIGHT * 0.5],
  octagon: [OCTAGON_RADIUS, OCTAGON_RADIUS, SHAPE_WIDTH_HEIGHT, OCTAGON_RADIAL_SEGMENTS],
  circle: [CIRCLE_RADIUS, CIRCLE_RADIUS, SHAPE_WIDTH_HEIGHT, CIRCLE_RADIAL_SEGMENTS],
  triangle: [TRIANGLE_RADIUS, TRIANGLE_RADIUS, SHAPE_WIDTH_HEIGHT, TRIANGLE_RADIAL_SEGMENTS],
}
const GRID = {
  col: { 
    _1: -xOffsetIncrement,
    _2: 0,
    _3: xOffsetIncrement
  },
  row: {
    _10: yMin + 5.25 * SHAPE_WIDTH_HEIGHT,
    _9: yMin + 5 * SHAPE_WIDTH_HEIGHT,
    _8: yMin + 4 * SHAPE_WIDTH_HEIGHT,
    _7: yMin + 3 * SHAPE_WIDTH_HEIGHT,
    _6: yMin + 3 * SHAPE_WIDTH_HEIGHT,
    _5: yMin + 2 * SHAPE_WIDTH_HEIGHT,
    _4: yMin + SHAPE_WIDTH_HEIGHT,
    _3: yMin,
  }
}


export const INTRO_PUPPETS = [
  // wave 1
  { type: 'puppetOctagon',
    props: { color: COLORS.red, args: ARGS.octagon, position: [GRID.col._1, GRID.row._3, 0]},
    key: uuidv4()
  },
  { type: 'puppetSquare',
    props: { color: COLORS.green, args: ARGS.box, position: [GRID.col._2, GRID.row._3, 0]},
    key: uuidv4()
  },
  { type: 'puppetTriangle',
    props: { color: COLORS.blue, args: ARGS.triangle, position: [GRID.col._3, GRID.row._3, 0]},
    key: uuidv4()
  },

  // wave 2
  { type: 'puppetTriangle',
    props: { color: COLORS.red, args: ARGS.triangle, position: [GRID.col._2, GRID.row._4, 0]},
    key: uuidv4()
  },
  { type: 'puppetCircle',
    props: { color: COLORS.green, args: ARGS.circle, position: [GRID.col._3, GRID.row._4, 0]},
    key: uuidv4()
  },
  { type: 'puppetSquare',
    props: { color: COLORS.blue, args: ARGS.box, position: [GRID.col._1, GRID.row._4, 0]},
    key: uuidv4()
  },

  // wave 3
  { type: 'puppetLetter',
    props: { character: 'R', color: COLORS.red, args: ARGS.box, position: [GRID.col._1, GRID.row._5, 0], offsetX: .3 },
    key: uuidv4()
  },
  { type: 'puppetLetter',
    props: { character: 'G', color: COLORS.green, args: ARGS.box, position: [GRID.col._2,  GRID.row._5, 0], offsetX: -.2 },
    key: uuidv4()
  },
  { type: 'puppetLetter',
    props: { character: 'B', color: COLORS.blue, args: ARGS.box, position: [GRID.col._3,  GRID.row._5, 0], offsetX: -.2 },
    key: uuidv4()
  },

  // wave 4
  { type: 'puppetOctagon',
    props: { color: COLORS.red, args: ARGS.octagon,  position: [GRID.col._3, GRID.row._6, 0]},
    key: uuidv4()
  },
  { type: 'puppetOctagon',
    props: { color: COLORS.green, args: ARGS.octagon,  position: [GRID.col._1, GRID.row._6, 0]},
    key: uuidv4()
  },
  { type: 'puppetOctagon',
    props: { color: COLORS.blue, args: ARGS.octagon, position: [GRID.col._2, GRID.row._6, 0]},
    key: uuidv4()
  },

  // wave 5
  { type: 'puppetOctagon',
    props: { color: COLORS.red, args: ARGS.octagon, position: [GRID.col._2, GRID.row._8, 0]},
    key: uuidv4()
  },
  { type: 'puppetCircle',
    props: { color: COLORS.green, args: ARGS.circle, position: [GRID.col._3, GRID.row._7 + halfSpace, 0]},
    key: uuidv4()
  },
  { type: 'puppetTriangle',
    props: { color: COLORS.blue, args: ARGS.triangle, position: [GRID.col._1, GRID.row._7 + halfSpace, 0]},
    key: uuidv4()
  },

  // wave 6
  { type: 'puppetLetter',
    props: { character: 'R', color: COLORS.red, args: ARGS.box, position: [GRID.col._1, GRID.row._9, 0], offsetX: .3 },
    key: uuidv4()
  },
  { type: 'puppetLetter',
    props: { character: 'G', color: COLORS.green, args: ARGS.box, position: [GRID.col._2,  GRID.row._8, 0], offsetX: -.2 },
    key: uuidv4()
  },
  { type: 'puppetLetter',
    props: { character: 'B', color: COLORS.blue, args: ARGS.box, position: [GRID.col._3,  GRID.row._8, 0], offsetX: -.2 },
    key: uuidv4()
  },

  // wave 7
  { type: 'puppetCircle',
    props: { color: COLORS.red, args: ARGS.circle,  position: [GRID.col._3, GRID.row._9, 0]},
    key: uuidv4()
  },
  { type: 'puppetCircle',
    props: { color: COLORS.green, args: ARGS.circle,  position: [GRID.col._1, GRID.row._9, 0]},
    key: uuidv4()
  },
  { type: 'puppetCircle',
    props: { color: COLORS.blue, args: ARGS.circle, position: [GRID.col._2, GRID.row._9, 0]},
    key: uuidv4()
  }
]

