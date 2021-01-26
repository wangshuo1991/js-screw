import checkEmpty from './checkEmpty'
/**
 * 将时间格式转换为毫秒
 * @param {String} time
 * @return {Number} 
 */
function toTimestamp (time) {
  let result;
  let regYear = /^(\d{4})-(\d{2})-(\d{2})$/;
  let regMinSec = /(\d{2}):(\d{2}):?(\d{2})?/;
  if (regYear.test(time)) {
    // '2021-01-02' 格式
    result = new Date(time).getTime();
  } else if (regMinSec.test(time)) {
    // '10:10:10' 或者 '10:10'
    let groups = time.match(regMinSec);
    console.log('groups', groups);
    let hour = +(!(checkEmpty(groups[1])) ? groups[1] : 0);
    let mins = +(!(checkEmpty(groups[2])) ? groups[2] : 0);
    let secs = +(!(checkEmpty(groups[3])) ? groups[3] : 0);
    console.log('hour', hour);
    result = (hour * 3600 + mins * 60 + secs * 1)*1000;
  }
  return result;
}

export default toTimestamp;