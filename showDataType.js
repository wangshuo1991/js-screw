/**
 * 判断数据类型
 * @param {any} data 
 */
function showDataType (data) {
  return Object.prototype.toString.call(data).slice(-7, -1);
}

export default showDataType;