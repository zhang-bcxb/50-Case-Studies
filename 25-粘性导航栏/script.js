const nav = document.querySelector('.nav')

// 绑定滚动事件
window.addEventListener('scroll', fixNav)

function fixNav() {
  // 当前页面的垂直滚动位置 大于 导航栏的高度 + 150
  if (window.scrollY > nav.offsetHeight + 150) {
    // 修改样式
    nav.classList.add('active')
  } else {
    // 移除样式
    nav.classList.remove('active')
  }
}
