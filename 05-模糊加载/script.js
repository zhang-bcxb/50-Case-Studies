const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// 加载数值
let load = 0
// 定时器
let int = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    // 清除定时器
    clearInterval(int)
  }
  // 显示文字进度
  loadText.innerText = `${load}%`
  // 透明度
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // 模糊效果
  bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`
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
