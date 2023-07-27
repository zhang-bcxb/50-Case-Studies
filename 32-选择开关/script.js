const toggles = document.querySelectorAll('.toggle')
// 三个开关
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// 注册切换事件
toggles.forEach((toggle) => toggle.addEventListener('change', (e) => doTheRrick(e.target)))

// 参数：传递点击的开关
function doTheRrick(theClickedOne) {
  //console.log(theClickedOne)
  // 当三个开关都打开
  if (good.checked && cheap.checked && fast.checked) {
    // 判断的元素相同，进行关闭一个按钮
    if (good === theClickedOne) {
      fast.checked = false
    }
    if (cheap === theClickedOne) {
      good.checked = false
    }
    if (fast === theClickedOne) {
      cheap.checked = false
    }
  }
}
