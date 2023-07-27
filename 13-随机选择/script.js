const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// 文本域获取焦点
textarea.focus()

// 按键松开
textarea.addEventListener('keyup', (e) => {
  // 获取文本域中的字符串，然后创建标签
  createTags(e.target.value)
  // 按下回车清除输入的值
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    // 随机选中
    randomSelect()
  }
})

// 创建标签
function createTags(input) {
  // 得到需要的文本数组
  const tags = input
    .split(',') // 按照英文逗号进行分割
    .filter((tag) => tag.trim() !== '') // 过滤空字符串
    .map((tag) => tag.trim()) // 返回去除空白字符的字符串
  // 清除盒子内部所有的标签
  tagsEl.innerHTML = ''
  // 创建标签
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

// 随机选中
function randomSelect() {
  // 时间间隔 3 秒，选中标签
  const times = 3
  // 定时器
  const interval = setInterval(() => {
    // 得到随机的标签
    const randomTag = pickRandomTag()

    if (randomTag !== undefined) {
      // 高亮选中
      highlightTag(randomTag)
      // 延时器，移除高亮
      setTimeout(() => {
        unhighlightTag(randomTag)
      }, 100)
    }
  }, 100)

  // 延时器，得到最后选中的结果
  setTimeout(() => {
    // 清除定时器
    clearInterval(interval)
    // 延时器，高亮选中的结果
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 1000)
}

// 随机选中标签
function pickRandomTag() {
  // 获得所有的标签
  const tags = document.querySelectorAll('.tag')
  // 返回选中的标签
  return tags[Math.floor(Math.random() * tags.length)]
}

// 高亮标签（选中的标签）
function highlightTag(tag) {
  tag.classList.add('highlight')
}

// 没有选中的标签
function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}
