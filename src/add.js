import createMathOperation from "../internal/createMathOperation.js"

// 加法方法 只能包含两个参数
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add