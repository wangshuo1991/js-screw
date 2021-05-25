// 比较两个数组之间的相同项目
/**@arr1:Arrary
 * @arr2:Arrary
 * @return:Arrary 
 * 
 * example: same([1,2,3,4,5], [1,2,3]) => [1,2,3]
 */

export default function same(arr1, arr2) {
  return arr1.filter(item => new Set(arr2).has(item))
}