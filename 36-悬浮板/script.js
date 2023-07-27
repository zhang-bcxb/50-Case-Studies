const container = document.getElementById('container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 500

// 循环创建小盒子并绑定鼠标事件
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

// 设置颜色
function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// 还原颜色
function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

// 获得随机颜色
function getRandomColor() {
  // 随机颜色
  return colors[Math.floor(Math.random() * colors.length)]
}
