const toString = Object.prototype.toString


// 获取数据类型: 返回结果形似[object Object]
export default function getTag(value) {
  // // js原生null转化成string也是[object Undefined], 此处封装用于区分null和undefined
  // if( value == null ) {
  //   return value === undefined ? '[object Undefined]' : '[object Null]'
  // }

  return toString.call(value)
}