const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// 左边 鼠标移入移出
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
// 右边 鼠标移入移出
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
