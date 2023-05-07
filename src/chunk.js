import slice from "./slice.js";
// 将array分成多个size长度的区块，并将这些区块组成一个新的数组, 相当于返回一个二维数组
// let arr = [1, 2, 3, 4, 5]
// chunk(arr, 2) => [[1, 2], [3, 4], [5]]
export default function chunk(array, size = 1) {
  let length = array === null ? 0 : array.length
  if( !length ) return []
}