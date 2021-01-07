
import showDataType from './showDataType'
/**
 *时间戳转换为指定的时间格式
 * @param {*} time
 * @param {*} format
 */
function convertTime (time, format='y-m-d') {
  if (showDataType(secs) != 'Number') {
    throw Error(`convertTime函数接收的参数 - ${secs} - 应该是数字或者是字符数字`);
  } else {
    var time = new Date(secs);
    var year = addZero(time.getFullYear());
    var month = addZero(time.getMonth() + 1);
    var day = addZero(time.getDate());
    var hour = addZero(time.getHours());
    var min = addZero(time.getMinutes());
    var sec = addZero(time.getSeconds());
    var final = [
      `${year}-${month}-${day}`,
      `${year}-${month}-${day} ${hour}:${min}`,
      `${month}-${day}`,
      `${year}年${month}月${day}日 ${hour}:${min}`,
      `${month}月${day}日`
    ];
    return final[analyseFormat(format)];
  }

}

/**
 * 解析时间格式
 * @param {*} format
 * 默认 'y-m-d' -> 2021-10-20
 * 'y-m-d-h-m' -> 2021-10-20 10:28
 * 'm-d' -> 10-20
 * 'ymdhm' -> 2021年10月20日 10:28
 * 'md' -> 10月20日
 */
function analyseFormat (format) {
  var formats = {
    'y-m-d': 0,
    'y-m-d-h-m': 1,
    'm-d': 2,
    'ymdhm': 3,
    'md': 4
  };
  return formats[format];
}

export default convertTime;