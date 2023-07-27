const codes = document.querySelectorAll('.code')

// 获取焦点
codes[0].focus()

codes.forEach((code, idx) => {
  // 绑定键盘按下事件
  code.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key >= 0 && e.key <= 9) {
      if (idx !== codes.length - 1) {
        codes[idx].value = ''
        setTimeout(() => codes[idx + 1].focus(), 10)
      } else {
        codes[idx].value = ''
      }
    } else if (e.key === 'Backspace') {
      // 判断是否是退格键
      if (idx !== 0) {
        setTimeout(() => codes[idx - 1].focus(), 10)
      }
    }
  })
})
