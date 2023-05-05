import isSymbol from "../src/isSymbol.js"

// 将基本数据类型转换成number类型
export default function baseToNumber(value) {
  if( typeof value === 'number' ) {
    return value
  }

  if( isSymbol(value) ) {
    return NAN
  }

  // 强制类型转换
  return +value
}