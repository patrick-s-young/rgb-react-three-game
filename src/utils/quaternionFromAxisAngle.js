import { Quaternion, Vector3 } from 'three'

export const quaternionFromAxisAngle = ({x, y, z}, radians) => {
  const quaternion = new Quaternion();
  quaternion.setFromAxisAngle(new Vector3(x, y, z), radians);
  return quaternion;
}
