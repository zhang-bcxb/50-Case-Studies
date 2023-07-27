// 工具函数
const $ = (selector) => document.querySelector(selector)
const buttonContainer = $('#buttons')
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const create = (element) => document.createElement(element)
const body = document.body

sounds.forEach((sound) => {
  // 创建按钮
  const btn = create('button')
  btn.textContent = sound
  btn.type = 'button'
  // 创建音乐
  const audio = create('audio')
  audio.src = './sounds/' + sound + '.mp3'
  audio.id = sound
  // 绑定事件
  btn.addEventListener('click', () => {
    stopSounds()
    $('#' + sound).play()
  })
  // 添加按钮
  buttonContainer.appendChild(btn)
  // beforebegin 元素自身的前面 添加元素
  buttonContainer.insertAdjacentElement('beforebegin', audio)
})

// 停止播放
function stopSounds() {
  sounds.forEach((sound) => {
    $('#' + sound).pause()
    $('#' + sound).currentTime = 0
  })
}
