
/**
 * 获取设备的分辨率以及和设计稿的宽高比
 * @param {*} curW
 * @param {*} curH
 * @return {*} 
 */
function getWh (curW, curH) {
  return {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    screenWRatio: Number(Math.round(curW / window.screen.width).toFixed(2)),
    screenHRatio: Number(Math.round(curH / window.screen.height).toFixed(2))
  }
}

export default getWh;