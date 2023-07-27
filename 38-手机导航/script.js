const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

// 底部按钮
listItems.forEach((item, idx) => {
  // 循环绑定点击事件
  item.addEventListener('click', () => {
    // 排他思想：先去除所有的激活样式，然后再进行单独添加
    hideAllContents()
    hideAllItems()
    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

// 隐藏所有图片
function hideAllContents() {
  contents.forEach((contents) => contents.classList.remove('show'))
}

// 所有按钮都没用被选中
function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'))
}
