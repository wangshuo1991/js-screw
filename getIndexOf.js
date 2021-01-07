/**
 *获取数组中某个元素的索引值
 *
 * @param {*} arr
 * @param {*} ele
 */
function getIndexOf (arr, ele) {
  var temp = arr == null ? [] : arr;
  return temp.indexOf(ele);
}

export default getIndexOf;