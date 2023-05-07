import getTag from "../internal/getTag.js";

// 判断是否是symbol类型
export default function isSymbol(value) {
  const type = typeof value

  return type == 'symbol' || (type === 'object' && value !== null && getTag(value) === '[object Symbol]')
}
