import * as THREE from 'three'
import { CONTAINER_WIDTH } from './container'
import { COLORS } from './game'

export const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .33 * 0.9

// Octagon rotation
const octQuaternion_rotateX = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2)
const octQuaternion_rotateY = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 8)
export const OCT_QUATERNION = new THREE.Quaternion().multiplyQuaternions(octQuaternion_rotateX, octQuaternion_rotateY).toArray()
export const OCTAGON_RADIUS = SHAPE_WIDTH_HEIGHT * 0.54

export const SHAPE = {
  colors: [COLORS.red, COLORS.green, COLORS.blue],
  widthHeight: SHAPE_WIDTH_HEIGHT,
  levels: {
    'octagons': ['octagon', 'octagon', 'octagon'],
    'octBoxSphere': ['octagon', 'box', 'sphere'],
    'spheres': ['sphere', 'sphere', 'sphere'],
    'boxes': ['box', 'box', 'box'],
    'sphereBoxSphere': ['sphere', 'box', 'sphere'],
    'boxSphereBox': ['box', 'sphere', 'box']
  },
  geometryArgs: {
    'sphere': { args: [SHAPE_WIDTH_HEIGHT * .5]},
    'box': { args: [SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT]},
    'octagon': { args: [SHAPE_WIDTH_HEIGHT * .5, SHAPE_WIDTH_HEIGHT * .5, SHAPE_WIDTH_HEIGHT, 8]}
  }
}