const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// 点击开启按钮，显示菜单
open.addEventListener('click', () => container.classList.add('show-nav'))
// 点击关闭按钮，关闭菜单
close.addEventListener('click', () => container.classList.remove('show-nav'))
