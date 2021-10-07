

// 导入 add模块
import {addFn} from './add/add'
// 导入 tool模块 实现更新打包
import {getArrSum} from './tool/tool'

console.log(addFn(10, 20));
// console.log(getArrSum([1,2,3,4,5,6,,7,8,9,10]));
console.log(getArrSum([1, 2, 3]));