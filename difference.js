// 比较两个数组中不同的项目
/**@arr1:Arrary
 * @arr2:Arrary
 * @return:Arrary 
 * 
 * example: difference([1,2,3,4,5], [1,2,3]) => [4,5]
 */
export default function difference (arr1, arr2) {
  return arr1.filter(item => !new Set(arr2).has(item))
}