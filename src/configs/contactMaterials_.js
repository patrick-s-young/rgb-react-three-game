import { useContactMaterial } from '@react-three/cannon'

export const CONTACT_MATERIALS = {
  CONTAINER: 'CONTAINER',
  SHAPE: 'SHAPE'
}

export const useContactMaterials = () => {
  useContactMaterial(CONTACT_MATERIALS.CONTAINER, CONTACT_MATERIALS.CONTAINER, {
    contactEquationRelaxation: 3,
    contactEquationStiffness: 1e8,
    friction: 0,
    frictionEquationStiffness: 1e8,
    restitution: 0.3,
  })

  useContactMaterial(CONTACT_MATERIALS.SHAPE, CONTACT_MATERIALS.CONTAINER, {
    contactEquationRelaxation: 3,
    contactEquationStiffness: 1e8,
    friction: 0,
    frictionEquationStiffness: 1e8,
    restitution: 0.3,
  })

  useContactMaterial(CONTACT_MATERIALS.SHAPE, CONTACT_MATERIALS.SHAPE, {
    contactEquationRelaxation: 3,
    contactEquationStiffness: 1e8,
    friction: 0.2,
    frictionEquationStiffness: 1e8,
    restitution: 0.3,
  })

}