import showDataType from './showDataType'
/**
 * json转换为数据
 * @param {string} json 
 */
function jsonToVal (json) {
  if (showDataType(json) == 'String') {
    return JSON.parse(json);
  } else {
    throw error('不是json串')
  }
}

export default jsonToVal;