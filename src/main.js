// jquery
import $ from 'jquery'

// css
import  './style/li.css'
// less
import './style/li.less'
// 大图
import imgUrl from './assets/big.gif'
let img = document.createElement('img')
img.src= imgUrl
// 字体图标
import  './assets/fonts/iconfont.css'

document.body.appendChild(img)
$(function () {
    $('#app li:nth-child(odd)').css('color','red')
    $('#app li:nth-child(even)').css('color','blue')

})
const fn =()=>{
    console.log('你好，李焕英！');
}
console.log(fn) // 这里必须打印不能调用/不使用, 不然webpack会精简成一句打印不要函数了/不会编译未使用的代码
// 没有babel集成时, 原样直接打包进lib/bundle.js
// 有babel集成时, 会翻译成普通函数打包进lib/bundle.js
console.log(abc); // 不要声明abc变量