const $ = (v) => document.querySelector(v)
const $$ = (v) => document.querySelectorAll(v)
const cardHeader = $('#card-header')
const cardTitle = $('#card-title')
const cardMessage = $('#card-message')
const cardAuthorAvatar = $('#card-author-avatar')
const cardAuthorName = $('#card-author-name')
const cardAuthorDate = $('#card-author-date')

const animated_bgs = $$('.animated-bg')
const animated_bgs_texts = $$('.animated-bg-text')

// 数据
const cardObject = {
  cardHeader: 'header.png',
  cardTitle: '草帽小子',
  cardMessage: '外号“草帽”路飞，是草帽一伙、草帽大船团船长，极恶的世代之一。橡胶果实能力者，悬赏金<mark>15</mark>亿贝里。梦想是找到传说中的<mark>One Piece</mark>，成为海贼王。',
  cardAuthorAvatar: 'avatar.png',
  cardAuthorName: '蒙奇·D·路飞',
  cardAuthorDate: '2021-07-12',
}

// 延时器
setTimeout(initCardHTML, 1000)
// 设置属性
function setAttr(url, el, prop = 'src') {
  // console.log(url)
  // 设置图片属性
  return el.querySelector('img').setAttribute(prop, url)
}
// 设置标签
function setHTML(html, el, prop = 'innerHTML') {
  return (el[prop] = html)
}
// 初始化标签
function initCardHTML() {
  // 设置图片
  ;[
    {
      el: cardHeader,
      prop: 'cardHeader',
    },
    {
      el: cardAuthorAvatar,
      prop: 'cardAuthorAvatar',
    },
  ].forEach((item) => setAttr(cardObject[item.prop], item.el))

  // 设置文本
  ;[
    {
      el: cardTitle,
      prop: 'cardTitle',
    },
    {
      el: cardMessage,
      prop: 'cardMessage',
    },
    {
      el: cardAuthorName,
      prop: 'cardAuthorName',
    },
    {
      el: cardAuthorDate,
      prop: 'cardAuthorDate',
    },
  ].forEach((item) => setHTML(cardObject[item.prop], item.el))

  // 移除动画
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bgs_texts.forEach((text) => text.classList.remove('animated-bg-text'))
}
