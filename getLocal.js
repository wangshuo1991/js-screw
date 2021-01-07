import jsonToVal from "./jsonToVal";
/**
 * 将sessionStorage存储的数据取出来
 * @param {string} key
 */
function getLocal (key) {
  try {
    return jsonToVal(window.localStorage.getItem(key));
  } catch (error) {
    throw error(`getLocal函数报错了 -- error`)
  }
}

export default getLocal;