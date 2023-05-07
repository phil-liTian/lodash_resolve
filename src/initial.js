import slice from "./slice.js"

// 去掉最后一个元素
export default function initial(array) {
  let length = array == null ? 0 : array.length
  return length ? slice(array, 0, -1) : []
}