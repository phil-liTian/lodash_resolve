
import isSymbol from "../src/isSymbol.js"

const symbolToString = Symbol.prototype.toString
// 将数据转化成string类型的数据
export default function baseToString(value) {
  // 本身就是string类型的数据
  if( typeof value === 'string' ) {
    return value
  }

  // 将数组类型的数据转换成字符串
  if( Array.isArray(value) ) {
    return `${value.map(baseToString)}`
  }

  // 将symbol类型的数据转换成字符串
  if( isSymbol(value) ) {
    return symbolToString ? symbolToString.call(value) : ''
  }

  const result = `${value}`
  return result
}