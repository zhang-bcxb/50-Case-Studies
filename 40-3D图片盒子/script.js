const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

// 绑定点击事件
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// 创建小盒子
function createBoxes() {
  // 行（y轴）
  for (let i = 0; i < 4; i++) {
    // 列（x轴）
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      // 背景定位
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}
createBoxes()
