// 引导按钮
const floating_btn = document.querySelector('.floating-btn')
const close_btn = document.querySelector('.close-btn')
const social_panel_container = document.querySelector('.social-panel-container')

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
})

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
})

let iframe = document.querySelector('#main')
// 判断引导按钮跳转的页面
const homePage = (flag) => {
  if (flag == 'main1') {
    iframe.src = '../main1/index.html'
  } else if (flag == 'main2') {
    iframe.src = '../main2/index.html'
  }
}

// 联系弹窗
const contactMe = () => {
  let qq = [
    {
      upName: '山羊の前端小窝',
      upUrl: 'https://space.bilibili.com/266664645',
      name: '山羊圈交流群',
      number: '347632328',
    },
    {
      upName: 'KSaMar',
      upUrl: 'https://space.bilibili.com/51110915',
      name: 'Web 技术交流群',
      number: '854197159',
    },
    {
      upName: '乔木真言',
      upUrl: 'https://space.bilibili.com/688238053',
      name: '乔木网络交流群',
      number: '828789351',
    },
    {
      upName: '哆啦niko',
      upUrl: 'https://space.bilibili.com/794739',
      name: '哆啦A梦的口袋',
      number: '688781129',
    },
  ]

  let html = '<ul style="width:50%;margin:0 auto;">'
  qq.forEach((item) => {
    html += `<li class='li-qq'>
    <div class='up'><a href="${item.upUrl}" target="_blank" style="color:#fff;">up 主：${item.upName}</a></div>
    <div class='qq'><span>${item.name}：</span><span>${item.number}</span></div>
    </li>`
  })

  html += '</ul>'

  Swal.fire({
    title: '<strong>学习交流群</strong>',
    icon: 'info',
    html: html,
    footer: '<a href="https://space.bilibili.com/337439992" target="_blank">我的B站空间</a>',
    showCloseButton: true,
  })
}