import * as THREE from 'three'
import { CONTAINER_WIDTH } from './container'
import { COLORS } from './game'

export const SHAPE_WIDTH_HEIGHT = CONTAINER_WIDTH * .33 * 0.925
const cylinder_rotateX = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2)
const circleOctagon_rotateY = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 8)
const triangle_rotateY = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 3)
export const OCTAGON_QUATERNION = new THREE.Quaternion().multiplyQuaternions(cylinder_rotateX, circleOctagon_rotateY).toArray()
export const CIRCLE_QUATERNION = OCTAGON_QUATERNION
export const TRIANGLE_QUATERNION = new THREE.Quaternion().multiplyQuaternions(cylinder_rotateX, triangle_rotateY).toArray()
export const OCTAGON_RADIUS = SHAPE_WIDTH_HEIGHT * 0.54
export const OCTAGON_RADIAL_SEGMENTS = 8
export const CIRCLE_RADIUS = SHAPE_WIDTH_HEIGHT * 0.5
export const CIRCLE_RADIAL_SEGMENTS = 32
export const TRIANGLE_RADIUS = SHAPE_WIDTH_HEIGHT * 0.67
export const TRIANGLE_RADIAL_SEGMENTS = 3

export const SHAPE = {
  colors: [COLORS.red, COLORS.green, COLORS.blue],
  widthHeight: SHAPE_WIDTH_HEIGHT,
  levels: {
    'triangles': ['triangle', 'triangle', 'triangle'],
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
    'triangle': { args: [TRIANGLE_RADIUS, TRIANGLE_RADIUS, SHAPE_WIDTH_HEIGHT, TRIANGLE_RADIAL_SEGMENTS]},
  }
}