
// 判断当前数据类型是不是对象类型 包括函数, 不包括null
export default function isObject(value) {
  const type = typeof value

  return value != null && ( type === 'object' || type === 'function' )
}