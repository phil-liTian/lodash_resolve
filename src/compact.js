
/**
 * 创建一个新数组，包含原数组中所有非假值元素
 * @param {*} array 
 */

export default function compact(array) {
  let result = []
  let resIndex = 0
  if( array == null ) return result
  for (const value of array) {
    if( value ) {
      result[resIndex++] = value
    }
  }

  return result
}