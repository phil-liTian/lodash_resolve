
/**
 * isObjectLike({}) => true
 * isObjectLike([1, 2]) => true
 * 与isObject的区别是不包含函数
 * @param {*} value 
 * @returns 
 */
export default function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}