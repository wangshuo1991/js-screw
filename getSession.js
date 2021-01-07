import jsonToVal from "./jsonToVal";
/**
 * 将sessionStorage存储的数据取出来
 * @param {string} key
 */
function getSession (key) {
  try {
    return jsonToVal(window.sessionStorage.getItem(key));
  } catch (error) {
    throw error(`getLocal函数报错了 -- error`)
  }
}

export default getSession;