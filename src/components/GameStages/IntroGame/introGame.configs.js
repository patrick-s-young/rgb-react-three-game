import { v4 as uuidv4 } from 'uuid';
import { SHAPE_WIDTH_HEIGHT, COLORS, OCTAGON_RADIUS } from '../../../configs/constants'


const halfSpace = SHAPE_WIDTH_HEIGHT * 0.5
const xOffsetIncrement = SHAPE_WIDTH_HEIGHT * 1.03
const yMin = 2.5 * SHAPE_WIDTH_HEIGHT
const ARGS = {
  box: new Array(3).fill(SHAPE_WIDTH_HEIGHT),
  sphere: [SHAPE_WIDTH_HEIGHT * 0.5],
  octagon: [OCTAGON_RADIUS, OCTAGON_RADIUS, SHAPE_WIDTH_HEIGHT, 8]
}
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


export const INTRO_PUPPETS = [
  // wave 1
  { type: 'puppetOctagon',
    props: { color: COLORS.red, args: ARGS.octagon, position: [GRID.col._1, GRID.row._3, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.green, args: ARGS.box, position: [GRID.col._2, GRID.row._3, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.blue, args: ARGS.box, position: [GRID.col._3, GRID.row._3, 0]},
    key: uuidv4()
  },

  // wave 2
  { type: 'puppetBox',
    props: { color: COLORS.red, args: ARGS.box, position: [GRID.col._2, GRID.row._4, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.green, args: ARGS.sphere, position: [GRID.col._3, GRID.row._4, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
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
  { type: 'puppetBox',
    props: { color: COLORS.green, args: ARGS.box,  position: [GRID.col._1, GRID.row._6, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.blue, args: ARGS.sphere, position: [GRID.col._2, GRID.row._6, 0]},
    key: uuidv4()
  },

  // wave 5
  { type: 'puppetBox',
    props: { color: COLORS.red, args: ARGS.box, position: [GRID.col._2, GRID.row._8, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.green, args: ARGS.sphere, position: [GRID.col._3, GRID.row._7 + halfSpace, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.blue, args: ARGS.sphere, position: [GRID.col._1, GRID.row._7 + halfSpace, 0]},
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
  { type: 'puppetBox',
    props: { color: COLORS.red, args: ARGS.box,  position: [GRID.col._3, GRID.row._9, 0]},
    key: uuidv4()
  },
  { type: 'puppetBox',
    props: { color: COLORS.green, args: ARGS.box,  position: [GRID.col._1, GRID.row._9, 0]},
    key: uuidv4()
  },
  { type: 'puppetSphere',
    props: { color: COLORS.blue, args: ARGS.sphere, position: [GRID.col._2, GRID.row._9, 0]},
    key: uuidv4()
  }
]

