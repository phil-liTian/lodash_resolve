/**
 * 切割数组
 * @param {*} array 原始数组
 * @param {*} start 切割的开始位置
 * @param {*} end 切割的末尾位置，不包含下标为end的元素
 * @returns 
 */
export default function slice(array, start, end) {
  let length = array === null ? 0 : array.length
  // array 为null或者为空数组, 则返回空
  if( !length ) return []
  // 兼容没传start的情况
  start = start == null ? 0 : start
  // 兼容没传end的情况
  end = end == null ? length : end

  if(start < 0) {
    start = -start > length ? 0 : ( length + start )
  } 
  
  // end超过数组长度则end直接取数组长度
  end = end > length ? length : end
  // end可以传负数，负数意为截取到后几位
  if( end < 0 ) {
    end += length
  }

  length = start > end ? 0 : (end - start)


  let index = -1
  const result = new Array(length)
  while(++index < length) {
    result[index] = array[index + start]
  }

  return result
}