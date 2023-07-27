const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['星期日', '星期1', '星期2', '星期3', '星期4', '星期5', '星期6']
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

// 切换按钮
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    // 黑色主题 => 白色主题
    html.classList.remove('dark')
    e.target.innerHTML = '黑色'
  } else {
    // 白色主题 => 黑色主题
    html.classList.add('dark')
    e.target.innerHTML = '浅色'
  }
})

// 设置时间
function setTime() {
  // 时间处理
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // 指针旋转
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

  // 时间和日期的文本显示
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}${ampm}`
  dateEl.innerHTML = `${months[month]},<span class="circle">${date}</span>,${days[day]}`
}

/**
 * 数值映射的函数：将一个范围数字映射到另一个数字范围
 * 比方说，将1 ~ 100的数字范围映射到0 ~ 1之间
 * @param {*} num 需要映射的数值
 * @param {*} in_min 范围的最小值
 * @param {*} in_max 范围的最大值
 * @param {*} out_min 输出的最小值
 * @param {*} out_max 输出的最大值
 * @returns
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// 开始的时候执行一次
setTime()

// 每一秒执行一次
setInterval(setTime, 1000)
