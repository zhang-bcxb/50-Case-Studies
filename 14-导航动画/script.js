const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
// 点击切换按钮，然后切换类名，存在 active（展开）
toggle.addEventListener('click', () => nav.classList.toggle('active'))
