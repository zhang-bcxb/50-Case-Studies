const toggles = document.querySelectorAll('.faq-toggle')

// 注册事件
toggles.forEach((toggle) => {
  // 点击切换按钮
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})
