const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

/*
// 绑定点击事件
loveMe.addEventListener('click', (e) => {
  // 判断双击
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})*/

// 绑定双击事件
loveMe.addEventListener('dblclick', (e) => {
  createHeart(e)
})

// 创建红心
function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  // 获得鼠标位置
  const x = e.clientX
  const y = e.clientY

  // 获得盒子距离位置
  const letOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  // 获得鼠标在盒子内部点击的位置
  const xInside = x - letOffset
  const yInside = y - topOffset

  // 设置创建红心的位置
  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  // 修改点击的次数
  times.innerHTML = ++timesClicked

  loveMe.appendChild(heart)

  // 延时器，销毁盒子
  setTimeout(() => {
    heart.remove()
  }, 1000)
}
