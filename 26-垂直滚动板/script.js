const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

// 得到右侧盒子的个数
const slidesLength = slideRight.querySelectorAll('div').length

// 当前显示的盒子
let activeSliderIndex = 0
// 左侧向上滑动,刚开始滑动-300vh
// 左侧与右侧反向对应=>左侧第一个盒子与右侧最后一个盒子对应 
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
// console.log(slideLeft.style.top)

//给按钮绑定点击事件
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

// 改变滑动的盒子,参数是滑动方向
const changeSlide = (direction) => {
  // 得到父盒子的高度
  const slideHeight = sliderContainer.clientHeight

  if (direction === 'up') {
    // 点击向上按钮(右侧按钮)
    activeSliderIndex++
    // 边界处理
    if (activeSliderIndex > slidesLength - 1) {
      activeSliderIndex = 0
    }
  } else if (direction === 'down') {
    // 点击向下按钮(左侧按钮)
    activeSliderIndex--
    // 边界处理
    if (activeSliderIndex < 0) {
      activeSliderIndex = slidesLength - 1
    }
  }

  // 反向滑动,让文字与图片对应
  // 右侧向上移动
  slideRight.style.transform = `translateY(-${activeSliderIndex * slideHeight}px)`
  // 左侧向下移动
  slideLeft.style.transform = `translateY(${activeSliderIndex * slideHeight}px)`
}
