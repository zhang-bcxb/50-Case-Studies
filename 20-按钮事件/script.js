const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  // 注册按钮点击事件
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY
    console.table({ x, y })

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    console.table({ buttonTop, buttonLeft })

    // 计算鼠标点击的位置
    const xInside = x - buttonLeft
    const yInside = y - buttonTop
    console.table({ xInside, yInside })

    // 以鼠标点击的位置实现效果
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    // this 指向的是触发的对象,即点击的按钮
    this.appendChild(circle)
    // console.log(this)
    // 延时器
    setTimeout(() => {
      circle.remove()
    }, 500)
  })
})
