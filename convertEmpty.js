/**
 * 对于空数据的处理 默认转为 '--'
 * @param {any} value 
 */
function convertEmpty (value, str='--') {
  return (!value && value !== 0) ? str : value;
}

export default convertEmpty;