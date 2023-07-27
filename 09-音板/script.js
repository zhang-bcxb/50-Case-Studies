const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
  // 创建按钮
  const btn = document.createElement('button')
  // 按钮样式
  btn.classList.add('btn')
  // 按钮文字
  btn.innerText = sound
  // 绑定事件
  btn.addEventListener('click', () => {
    // 点击按钮，停止播放音乐
    stopSongs()
    // 播放音乐
    document.getElementById(sound).play()
  })
  // 添加按钮
  document.getElementById('buttons').appendChild(btn)
})

// 暂停播放
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)
    // 暂停播放
    song.pause()
    // 修改当前播放的时间
    song.currenTime = 0
  })
}
