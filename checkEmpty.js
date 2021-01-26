import showDataType from './showDataType'
/**
 * 判断数据是否为空
 *
 * @param {*} str
 * @return {Boolean}
 */
function checkEmpty (data) {
  if (showDataType(data) == 'Object') {
    return Object.keys(data).length == 0 ? true : false;
  } else if (showDataType(data) == 'Array') {
    return data.length == 0 ? true : false;
  } else {
    return (!data && data != 0) ? true : false;
  }
} 

export default checkEmpty;