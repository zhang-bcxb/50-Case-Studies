const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// 搜索按钮被点击，切换类名
btn.addEventListener('click', () => {
  // 切换类名
  search.classList.toggle('active')
  // 输入框获取焦点
  input.focus()
})
