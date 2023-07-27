const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

// 小杯子事件注册
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

// 杯子高亮(已经被点击的盒子)
function highlightCups(idx) {
  // 将前面的杯子保留已经被倒入的状态
  // 最后一个盒子 并且 该杯子的水已经被倒入
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--
  // 该杯子的水已经被倒入 并且 小杯子的下一个已经被导入
  else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx--

  // 将没有倒水的杯子,倒水
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  // 更新大杯子
  updateBigCup()
}

// 更新大杯子
function updateBigCup() {
  // 已经倒水杯子的个数
  const fullCups = document.querySelectorAll('.cup-small.full').length
  // 小杯子的个数
  const totalCups = smallCups.length

  if (fullCups === 0) {
    // 还没有开始倒水,隐藏进度条
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    // 开始倒水,显示进度条
    percentage.style.visibility = 'visible'
    // 比例计算:大杯子的总高度(330px)*比例
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    // 大杯子被倒满,隐藏剩余提示
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    // 大杯子被倒满,显示剩余提示
    remained.style.visibility = 'visible'
    // 显示还剩多少水能装满
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
