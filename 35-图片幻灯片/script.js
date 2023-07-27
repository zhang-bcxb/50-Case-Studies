const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

// 当前选中的图片
let idx = 0
// 定时器
// let interval = setInterval(run, 2000)

// 执行
function run() {
  idx++
  changeImage()
}

// 改变图片
function changeImage() {
  // 边界判断
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1
  }
  // 平移图片盒子
  imgs.style.transform = `translateX(${-idx * 500}px)`
}

// 重置定时器
function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

// 右边按钮(下一张)
rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})
// 左边按钮(上一张)
leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})
