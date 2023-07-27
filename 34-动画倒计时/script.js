const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

// 初始化计数器
function resetDOM() {
  // 显示计数器
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  // 清空样式,给第一个元素绑定样式
  nums.forEach((num) => {
    num.classList.value = ''
  })
  nums[0].classList.add('in')
}

// 执行动画
function runAnimation() {
  nums.forEach((num, idx) => {
    const nextTolast = nums.length - 1
    // animationend:在CSS动画结束时触发的事件
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextTolast) {
        // 进入动画 并且 不是最后一个数字
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // 退出动画 并且 当前元素的下一个兄弟元素节点（即紧邻的下一个元素节点）
        console.log(num.nextElementSibling)
        num.nextElementSibling.classList.add('in')
      } else {
        // 隐藏计数器,显示按钮
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

// 绑定点击事件,重新执行动画
replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})
