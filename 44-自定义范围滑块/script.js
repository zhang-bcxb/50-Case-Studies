const range = document.getElementById('range')

// 绑定事件
range.addEventListener('input', (e) => {
  // 滑动的数值
  const value = e.target.value
  // nextElementSibling 返回指定元素之后的下一个兄弟元素
  const label = e.target.nextElementSibling

  // 获取轨道宽度=>300px
  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  // 获取按钮宽度=>80px
  const label_width = getComputedStyle(label).getPropertyValue('width')

  // 去除单位，得到数值
  const num_width = parseInt(range_width)
  const num_label_width = parseInt(label_width)

  // 最大和最小
  const max = +e.target.max
  const min = +e.target.min

  // 提示框定位计算
  // 50*300/100（一个数值对应3个宽度） - 80/2(自身宽度的一半)
  // scale(value, min, max, -10, 10) 可要可不要，只是让偏移更明显一些
  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, -10, 10)
  //console.log(scale(value, min, max, 10, -10)) // 50 => 0
  //console.log(left) // 110 => 50 * 3 - 40
  label.style.left = `${left}px`

  // 更新提示
  label.innerHTML = value
})

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
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
