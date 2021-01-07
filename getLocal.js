import jsonToVal from "./jsonToVal";
/**
 * 将sessionStorage存储的数据取出来
 * @param {string} key
 */
function getLocal (key) {
  return jsonToVal(window.localStorage.getItem(key));
}

export default getLocal;