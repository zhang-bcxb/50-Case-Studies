const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')

const nav = document.querySelectorAll('.nav')

// 打开时，让三层导航栏都显示
open_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.add('visible'))
})
// 打开时，让三层导航栏都隐藏
close_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.remove('visible'))
})
