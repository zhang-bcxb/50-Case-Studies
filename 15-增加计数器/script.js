const counters = document.querySelectorAll('.counter')

/**
 * 更新计数器中的数字
 * @param {*} counter 定时器元素
 * @param {*} target 最终显示的数字
 * @param {*} increment 步长
 */
const updateCounter = (counter, target, increment) => {
  // 获取显示的数字
  const c = +counter.innerText

  if (c < target) {
    // 没到达最终显示的数字
    counter.innerText = `${Math.ceil(c + increment)}`
    // 延迟器（这里有递归的思想，即开了多个延时器）
    setTimeout(() => updateCounter(counter, target, increment), 1)
  } else {
    // 到达最终显示的数字
    counter.innerText = target
  }
}

// 更新每个计数器中的数字
counters.forEach((counter) => {
  // 最开始显示数字 0
  counter.innerText = '0'
  // 加号放在前面的作用：将字符串转成数字类型
  // 获取自定义属性，即获得最终显示的数字
  const target = +counter.getAttribute('data-target')
  // 增加的步长
  const increment = target / 200

  // 更新数字
  updateCounter(counter, target, increment)
})
