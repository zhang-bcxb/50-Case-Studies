const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cricles = document.querySelectorAll('.circle')

// 当前激活的数字，范围：1 - 4
let currentActive = 1

// 点击下一个按钮
next.addEventListener('click', () => {
  currentActive++
  // 如果超过，就激活最后一个数字
  if (currentActive > cricles.length) {
    currentActive = cricles.length
  }
  update()
})
// 点击上一个按钮
prev.addEventListener('click', () => {
  currentActive--
  // 如果超过，就激活第一个数字
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

// 更新样式
function update() {
  // 循环，第二个参数是索引
  cricles.forEach((circle, idx) => {
    // 索引小于当前数字
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // 获取激活的盒子
  const actives = document.querySelectorAll('.active')
  // 设置蓝色进度条
  progress.style.width = ((actives.length - 1) / (cricles.length - 1)) * 100 + '%'
  
  if (currentActive === 1) {
    // 当前激活的盒子是第一个，禁用上一个按钮
    prev.disabled = true
  } else if (currentActive === cricles.length) {
    // 当前激活的盒子是最后一个，禁用下一个按钮
    next.disabled = true
  } else {
    // 如果是中间的值，就不禁用
    prev.disabled = false
    next.disabled = false
  }
}
