const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

// 默认选中的是开心
let selectedRanting = '开心'

// 给父盒子绑定事件,click 有冒泡机制,这个用到了事件委托机制
ratingsContainer.addEventListener('click', (e) => {
  // parentNode 获取元素父节点
  // 选中的图片盒子,即 img
  //console.log(e.target);
  // 点击的是 img 或者 small 返回 true,如果点击的是 div,就是 false
  // 检查一个元素的类名列表中是否包含名为 "rating" 的类
  //console.log(e.target.parentNode.classList.contains('rating'));

  //nextElementSibling 属性只返回元素节点之后的兄弟元素节点
  //  console.log(e.target.nextElementSibling);

  // previousSibling 属性返回元素节点之前的兄弟节点（包括文本节点、注释节点）；
  // previousElementSibling 属性只返回元素节点之前的兄弟元素节点（不包括文本节点、注释节点）

  // 判断是否选中到 div 下的子盒子 并且 判断是否有兄弟节点
  if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
    // 如果点击的是 img 标签
    // 先移除所有选中的类名,然后再进行单独添加
    removeActive()
    e.target.parentNode.classList.add('active')
    // 得到表情的文本
    selectedRanting = e.target.nextElementSibling.innerHTML
  } else if (e.target.parentNode.classList.contains('rating') && e.target.previousSibling && e.target.previousElementSibling.nodeName === 'IMG') {
    // 如果得到的是 small 标签
    // console.log(e.target.previousElementSibling.nodeName)
    // 先移除所有选中的类名,然后再进行单独添加
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRanting = e.target.innerHtml
  }
})

// 发送按钮被点击,显示反馈面板
sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>谢谢反馈！</strong>
    <br>
    <strong>你的心情:${selectedRanting}</strong>
    <p>我们感谢你的反馈</p>
    `
})

// 为所有的盒子移除选中类名
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}
