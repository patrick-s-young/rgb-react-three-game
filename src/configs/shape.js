import * as THREE from 'three'
import { CONTAINER_WIDTH } from './container'
import { COLORS } from './game'

export const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .33 * 0.925

// Octagon rotation
const octQuaternion_rotateX = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2)
const octQuaternion_rotateY = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 8)
export const CYLINDER_QUATERNION = new THREE.Quaternion().multiplyQuaternions(octQuaternion_rotateX, octQuaternion_rotateY).toArray()
export const OCTAGON_RADIUS = SHAPE_WIDTH_HEIGHT * 0.54
export const OCTAGON_RADIAL_SEGMENTS = 8
export const CIRCLE_RADIUS = SHAPE_WIDTH_HEIGHT * 0.5
export const CIRCLE_RADIAL_SEGMENTS = 32

export const SHAPE = {
  colors: [COLORS.red, COLORS.green, COLORS.blue],
  widthHeight: SHAPE_WIDTH_HEIGHT,
  levels: {
    'circles': ['circle', 'circle', 'circle'],
    'octagons': ['octagon', 'octagon', 'octagon'],
    'octBoxSphere': ['octagon', 'box', 'sphere'],
    'spheres': ['sphere', 'sphere', 'sphere'],
    'boxes': ['box', 'box', 'box'],
    'sphereBoxSphere': ['sphere', 'box', 'sphere'],
    'boxSphereBox': ['box', 'sphere', 'box']
  },
  geometryArgs: {
    'sphere': { args: [CIRCLE_RADIUS]},
    'box': { args: [SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT, SHAPE_WIDTH_HEIGHT]},
    'octagon': { args: [OCTAGON_RADIUS, OCTAGON_RADIUS, SHAPE_WIDTH_HEIGHT, OCTAGON_RADIAL_SEGMENTS]},
    'circle': { args: [CIRCLE_RADIUS, CIRCLE_RADIUS, SHAPE_WIDTH_HEIGHT, CIRCLE_RADIAL_SEGMENTS]},
  }
}