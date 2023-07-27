const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// 当前选中的图片
let activeSlide = 0
setBgTobody()

// 右边按钮
rightBtn.addEventListener('click', () => {
  activeSlide++
  // 越界判断
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgTobody()
  setActiveSlide()
})

// 左边按钮
leftBtn.addEventListener('click', () => {
  activeSlide--
  // 越界判断
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setBgTobody()
  setActiveSlide()
})

// 设置背景图片
function setBgTobody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// 设置选中图片样式
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}
