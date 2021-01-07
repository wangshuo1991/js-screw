import valToJson from "./valToJson";
/**
 * 将数据保存到 sessionStorage
 * @param {string} key
 * @param {any} value
 */
function savegetLocal (key, value) {
  window.localStorage.setItem(key, valToJson(value));
}

export default savegetLocal;