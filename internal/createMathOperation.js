import baseToString from "./baseToString.js";
import baseToNumber from "./baseToNumber.js";

// 创建一个数学表达式
export default function createMathOperation(operator, defaultValue) {

  return (value, other) => {
    // 兼容两个参数中有一个是undefined的情况
    if( value === undefined && other === undefined ) {
      return defaultValue
    }

    if( value === undefined && other !== undefined ) {
      return other
    }

    if( value !== undefined && other === undefined ) {
      return value
    }

    if( typeof value === 'string' || typeof other === 'string' ) {
      // 其中有一个参数是字符串类型的
      value = baseToString(value)
      other = baseToString(other)
    } else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }

    return operator(value, other)
  }
}