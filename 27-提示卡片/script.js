const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

// 消息内容
const messages = ['信息1', '信息2', '信息3', '信息4']
// 消息类型
const types = ['info', 'success', 'error']

// 给按钮绑定点击事件
button.addEventListener('click', () => createNotification())

// 创建消息盒子
function createNotification(message = null, type = null) {
  // 创建盒子
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())
  notif.innerText = message ? message : getRandomMessage()
  // 添加盒子
  toasts.appendChild(notif)

  // 延时器，销毁盒子
  setTimeout(() => {
    notif.remove()
  }, 3000)
}

// 获得随机的消息类型
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}

// 获得随机的消息内容
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
