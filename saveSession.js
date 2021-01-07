import valToJson from "./valToJson";
/**
 * 将数据保存到 sessionStorage
 * @param {string} key
 * @param {any} value
 */
function saveSession (key, value) {
  window.sessionStorage.setItem(key, valToJson(value));
}

export default saveSession;