const insert = document.getElementById('insert')
window.addEventListener('keydown', (event) => {
  // 显示按下的按键信息
  insert.innerHTML = `
    <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>event.key</small>
    </div>
    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div> 
    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
`
})
