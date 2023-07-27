// // 注册滚动事件
// window.addEventListener('scroll', checkBoxes)

// // 第一次启动，也运行一次
// checkBoxes()

function checkBoxes() {
  const boxes = document.querySelectorAll('.box')
  // 计算窗口高度的五分之四
  const triggerBottom = (window.innerHeight / 5) * 4
  console.log(triggerBottom)
  boxes.forEach((box) => {
    // 获取元素 box 相对于视口顶部的距离
    const boxTop = box.getBoundingClientRect().top
    // console.log(boxTop)
    // 在指定高度内的盒子进行显示
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

// 防抖函数
function debounce(fn, time = 100) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, time)
  }
}
// 创建模板
function createTemplate(num) {
  let str_temp = ''
  const body = document.body
  for (let i = 1; i <= num; i++) {
    let temp = `<div class="box"><h2>Content ${i}</h2></div>`
    str_temp += temp
  }
  body.insertAdjacentHTML('beforeend', str_temp)
}

window.onload = function () {
  createTemplate(20)
  checkBoxes()
  window.addEventListener('scroll', debounce(checkBoxes))
}
