// 在调用大于等于n次之后func函数才会执行
export default function after(n, func) {
  if( typeof func !== 'function' ) {
    throw new Error('expected a function')
  }
  n = n || 0
  return function(...args) {
    if( --n < 1 ) {
      return func.apply(this, args)
    }
  }
}