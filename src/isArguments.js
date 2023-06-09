import getTag from "../internal/getTag.js";
import isObjectLike from "./isObjectLike.js";


export default function isArguments(value) {
  return isObjectLike(value) && getTag(value) === '[object Arguments]'
}