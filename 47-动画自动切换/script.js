const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

// 卡片数据
const testimonials = [
  {
    name: '小行星1',
    position: '主播1',
    photo: 'logo.jpg',
    text: '【1】我是乔木 这是我的星期几 我不知道 希望大家能够一起学会这个47个项目 欢迎大家加入交流群 交流',
  },
  {
    name: '小行星2',
    position: '主播2',
    photo: 'logo.jpg',
    text: '【2】我是乔木 这是我的星期几 我不知道 希望大家能够一起学会这个47个项目 欢迎大家加入交流群 交流',
  },
  {
    name: '小行星3',
    position: '主播3',
    photo: 'logo.jpg',
    text: '【3】我是乔木 这是我的星期几 我不知道 希望大家能够一起学会这个47个项目 欢迎大家加入交流群 交流',
  }
]

let idx = 0

function updateTestimonial() {
  // 解构赋值
  const { name, position, photo, text } = testimonials[idx]

  // 更新数据
  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  // 边界处理
  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

updateTestimonial()
// 定时器（需要和动画的持续时间保持一致）
setInterval(updateTestimonial, 3000)
