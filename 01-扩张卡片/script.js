// 获取面板盒子
const panels = document.querySelectorAll('.panel')

// 给每个面板绑定事件
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    console.log(panel)
    // 移除样式
    removeActiveClass()
    // 添加样式
    panel.classList.add('active')
  })
})

// 移除样式方案一
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

// 移除样式方案二
function removeActiveClass2() {
  panels.forEach((item) => {
    console.log(item)
    // true 就会存进数组，即不是当前的盒子，就会存入数组（排除当前点击的盒子）
    ;[].filter.call(item.parentElement.children, (el) => el !== item).forEach((el) => el.classList.remove('active'))
  })
}