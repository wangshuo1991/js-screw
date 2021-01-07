import showDataType from './showDataType'
/**
 * 检测字符串是否属于当前类型
 * @param {string or number} target
 */
function checkString (target) {
  var res;
  if (showDataType(target) == 'Number') {
    res = String(target)
  } else if (showDataType(target) == 'String') {
    res = target
  } else {
    throw Error('checkString方法只接收字符串或数字类型！')
  }
  
  return {
    isIp: isIp(res),
    isServer: isServer(res),
    isCellNumber: isCellNumber(res),
    isStrongPwd: isStrongPwd(res)
  }
}

/**
 * 校验是否为ip
 * @param {string} str
 * @return {boolean} 
 */
function isIp (str) {
  return /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(str);
}

/**
 * 校验是否为服务器地址
 * @param {string} str
 * @return {boolean} 
 */
function isServer (str) {
  return /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?):\d{1,5}$/.test(str);
}

/**
 * 校验是否为手机号码
 * @param {string} str
 * @return {boolean} 
 */
function isCellNumber (str) {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(str);
}

/**
 * 校验密码是否高强度 必须包含大小写和数字
 * @param {string} str
 * @return {boolean} 
 */
function isStrongPwd (str) {
  return /(?=.{6,12})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/.test(str);
}

export default checkString;

