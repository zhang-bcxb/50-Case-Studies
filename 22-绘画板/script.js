const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEL = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

// 设置初始值
let size = 10
let isPressed = false
let color = (colorEl.vaule = 'black')
let x
let y

// 鼠标按下
canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  // 获取鼠标的位置
  x = e.offsetX
  y = e.offsetY
})

// 鼠标松开
document.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})

// 鼠标移动
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY
    // 画图
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)
    // 更新鼠标位置
    x = x2
    y = y2
  }
})

// 画圆形
function drawCircle(x, y) {
  // 开启一个新的路径
  ctx.beginPath()
  // 圆心坐标，半径，起始弧度，终点弧度
  ctx.arc(x, y, size, 0, Math.PI * 2)
  // 填充样式
  ctx.fillStyle = color
  // 开始绘制
  ctx.fill()
}

// 画线
function drawLine(x1, y1, x2, y2) {
  // 开启一个新的路径
  ctx.beginPath()
  // 起始位置
  ctx.moveTo(x1, y1)
  // 终点位置
  ctx.lineTo(x2, y2)
  // 描边颜色
  ctx.strokeStyle = color
  // 线的宽度
  ctx.lineWidth = size * 2
  // 开始绘制
  ctx.stroke()
}

// 字体增加
increaseBtn.addEventListener('click', () => {
  size += 5
  if (size > 50) {
    size = 50
  }
  sizeEL.innerText = size
})
// 字体减少
decreaseBtn.addEventListener('click', () => {
  size -= 5
  if (size < 5) {
    size = 5
  }
  sizeEL.innerText = size
})

// 颜色改变
colorEl.addEventListener('change', (e) => (color = e.target.value))
// 点击清除按钮
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))
