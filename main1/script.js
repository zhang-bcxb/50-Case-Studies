// 滚动效果 js
// 动画播放时间
const animationTime = 500
// 获取画布
const container = document.querySelector('.container')
// 获取侧边栏按钮
const lis = document.querySelectorAll('.controls li')
// 网页窗口宽度
let viewWidth = null
// 网页窗口高度
let viewHeight = null
// 屏幕索引
let index = 0
// 检测是否在滚动
let roll = false

// 鼠标滚动事件
const mousewheel = (e) => {
  // 判断是否在滚动
  if (!roll) {
    roll = true

    // 判断向上滚动还是向下滚动
    if (e.wheelDelta > 0 && index > 0) {
      // 向上滚动
      index--
    } else if (e.wheelDelta < 0 && index < lis.length - 1) {
      // 向下滚动
      index++
    }

    // 滚动屏幕
    rollScenes()
  }
}

// 添加鼠标滚动监听
document.addEventListener('mousewheel', mousewheel)

// 滚动视图
const rollScenes = () => {
  // 获取屏幕宽度
  viewWidth = document.body.clientWidth
  // 获取屏幕高度
  viewHeight = document.body.clientHeight
  // 添加动画
  container.classList.add('container-animation')
  // 更改位置
  container.style.top = -index * viewHeight + 'px'
  // 更改侧边栏样式
  changeLocation(index)
  // 卡片
  addCardHtml(index)

  // 更改状态
  setTimeout(function () {
    roll = false
    container.classList.remove('container-animation')
  }, animationTime)
}

//绑定点击事件
for (let i = 0; i < lis.length; i++) {
  // 给每个 li 添加点击事件
  lis[i].onclick = function () {
    // 判断是否在滚动
    if (!roll) {
      roll = true
      // 这里的 index 等于 li 的下标
      index = i
      rollScenes()
    }
  }
}

//改变li的样式
function changeLocation(index) {
  for (var j = 0; j < lis.length; j++) {
    lis[j].className = ''
  }
  lis[index].className = 'active'
}

// 窗体改动事件
const getWindowInfo = () => {
  // 获取屏幕宽度
  viewWidth = document.body.clientWidth
  // 获取屏幕高度
  viewHeight = document.body.clientHeight
  // 更改位置
  container.style.top = -index * viewHeight + 'px'
  // 屏幕块
  const section = document.querySelectorAll('.section')

  // 设置样式
  for (let i = 0; i < section.length; i++) {
    // section[i].setAttribute('style', 'width: ' + document.body.clientWidth + 'px; height: ' + document.body.clientHeight + 'px')
    section[i].style.width = viewWidth + 'px'
    section[i].style.height = viewHeight + 'px'
  }
}

// 添加窗体改动事件
window.addEventListener('resize', getWindowInfo)

/****************************** 卡片 ******************************/
const addCardHtml = async (index) => {
  const jsonDataPath = ['../data/01-10.json', '../data/11-20.json', '../data/21-30.json', '../data/31-40.json', '../data/41-50.json']
  const headerConfig = {
    headers: {
      Accept: 'application/json',
    },
  }
  fetch(jsonDataPath[index], headerConfig)
    // 将响应数据解析为 JSON
    .then((res) => res.json())
    .then((data) => {
      // 处理解析后的 JSON 数据
      console.log(data)
      let cardHtml = ''
      for (let i = 0; i < data.length; i++) {
        cardHtml += `
        <div class="card">
          <img src="../${data[i].projectName}/${data[i].projectImg}" />
          <div>
            <h2>第 ${index * 10 + i + 1} 个案例</h2>
            <h3 style="margin-top: 20px;">密码长度改变图片模糊</h3>
            <a href="../${data[i].projectName}/index.html">查看效果</a>
          </div>
        </div>
        `
      }
      // console.log(container.children)
      container.children[index].innerHTML = cardHtml
    })
}
addCardHtml(index)
