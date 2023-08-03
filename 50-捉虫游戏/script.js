const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const body = document.getElementById('body')

// 游戏时间
let seconds = 0
// 捉住的昆虫
let score = 0
// 选择的昆虫
let seleted_insect = {}

// body 绑定点击事件
body.addEventListener('click', () => {
  // 清除用户选择的文本内容
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
  // 一般做双击修改事件的时候禁止
})

// 游戏开始按钮
start_btn.addEventListener('click', () => {
  // console.log(1)
  // 跳转到第二页
  screens[0].classList.add('up')
})

// 选择昆虫按钮
choose_insect_btns.forEach((btn) => {
  // 为每个按钮绑定事件
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img')
    // getAttribute 获取指定属性的值
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')

    // 选中的昆虫
    seleted_insect = {
      src,
      alt,
    }
    // 跳转到第三页
    screens[1].classList.add('up')
    // 延时器
    setTimeout(createInset, 1000)
    // 开始计数
    starGame()
  })
})

// 开始计数
let startInterval = null
function starGame() {
  startInterval = setInterval(increaseTime, 1000)
}

// 时间计数器
function increaseTime() {
  //  Math.floor(x) 向下取整  5.9=5 5.2=5
  // 小于等于 x 的最大整数
  let m = Math.floor(seconds / 60)

  // % 取余 / 除号
  let s = seconds % 60

  // 三元运算符
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  // console.log(timeEl.childNodes[1])
  timeEl.childNodes[1].innerHTML = `${m}:${s}`
  seconds++
}

// 创建昆虫
function createInset() {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  // 获得昆虫的位置
  const { x, y } = getRandomLocation()

  insect.style.top = `${y}px`
  insect.style.left = `${x}px`

  insect.innerHTML = `
    <img src='${seleted_insect.src}' 
         alt='${seleted_insect.alt}' 
         style='transform: rotate(${Math.random() * 360}deg);'>
    `
  // 绑定点击事件
  insect.addEventListener('click', catchInsect)

  game_container.appendChild(insect)
}

// 获取随机的昆虫位置
function getRandomLocation() {
  // 获取屏幕的宽高
  const width = window.innerWidth
  const height = window.innerHeight

  // 昆虫显示的区域
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  // console.log(x, y)

  return { x, y }
}

// 捕捉昆虫
function catchInsect() {
  insceaseScore()
  this.classList.add('caught')
  setTimeout(() => {
    this.remove()
  }, 2000)
  addInsects()
}

// 添加昆虫
function addInsects() {
  setTimeout(createInset, 1000)
  setTimeout(createInset, 1500)
}

let mask = document.getElementById('mask')
// 分数计数器
function insceaseScore() {
  score++
  // 达到指定分数，显示游戏提示
  if (score == 10) {
    message.classList.add('visible')
    if (startInterval) {
      clearInterval(startInterval)
      mask.classList.add('cover')
    }
  }
  // if (score > 30) {
  //   message.classList.remove('visible')
  // }
  scoreEl.childNodes[1].innerHTML = `${score}`
}

// 继续游戏 或者 重新开始
const continueBtn = document.getElementById('continue')
const restartPlayBtn = document.getElementById('restart')
continueBtn.addEventListener('click', () => {
  message.classList.remove('visible')
  mask.classList.remove('cover')
  starGame()
})
restartPlayBtn.addEventListener('click', () => window.location.reload())

// 中英文切换
const tabItems = document.querySelectorAll('.tab-container .tab-item')
const siblings = (el) => [].filter.call(el.parentElement.children, (item) => item !== el)
let currentLang = 'zh'
tabItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('active')
    siblings(item).forEach((item) => item.classList.remove('active'))
    currentLang = item.getAttribute('data-value')
    initLangText()
  })
})
// 初始化文本
function initLangText() {
  const initData = globalData[currentLang]
  const needReplaceTexts = [
    {
      node: document.getElementById('text-time'),
      data: initData.countTime,
    },
    {
      node: document.getElementById('text-score'),
      data: initData.score,
    },
    {
      node: document.getElementById('text-message'),
      data: initData.message,
    },
    {
      node: document.getElementById('text-first'),
      data: initData.firstTitle,
    },
    {
      node: document.getElementById('text-second'),
      data: initData.secondTitle,
    },
    {
      node: document.getElementById('start-btn'),
      data: initData.playText,
    },
    {
      node: document.getElementById('continue'),
      data: initData.continueText,
    },
    {
      node: document.getElementById('restart'),
      data: initData.restartPlayText,
    }
  ]
  // 按钮中英文切换
  tabItems.forEach((item) => {
    const attr = item.getAttribute('data-value')
    item.textContent = initData[attr]
  })
  // 页面文本中英文切换
  needReplaceTexts.forEach((item) => (item.node.innerText = item.data))
  // 图片标题
  document.querySelectorAll('.insects-list li').forEach((item, index) => {
    // console.log(item.children[0].children[0])
    const content = item.children[0].children[0]
    content.innerText = initData.insectNameList[index]
  })
  // 标题
  document.title = initData.documentTitle
}
