const password = document.getElementById('password')
const background = document.getElementById('background')

// 给密码框绑定事件
password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  // 密码长度为10，就会清晰
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})
