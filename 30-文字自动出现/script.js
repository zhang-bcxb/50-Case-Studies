const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = '今天我吃了很多素菜，明天我要吃肉'

let idx = 1
let speed = 300 / speedEl.value
writeText(text)

// 显示的文本
function writeText(str) {
  // 截取的长度
  textEl.innerText = str.slice(0, idx)
  // console.log('textEl.innerText: ', textEl.innerText)
  idx++

  // 长度超过，则重新开始
  if (idx > str.length) {
    idx = 1
  }

  // 延时器
  setTimeout(() => writeText(str), speed)
}

// 绑定输入事件，修改速度
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
