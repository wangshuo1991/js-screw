import jsonToVal from "./jsonToVal";
/**
 * 将sessionStorage存储的数据取出来
 * @param {string} key
 */
function getSession (key) {
  return jsonToVal(window.sessionStorage.getItem(key));
}

export default getSession;