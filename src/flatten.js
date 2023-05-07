import baseFlatten from "../internal/baseFlatten.js"

// 减少array的一层嵌套深度
export default function flatten(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}