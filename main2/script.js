window.onload = () => {
  // 放大分区
  const itemDiv = Array.from(document.querySelectorAll('.item'))
  const cards = Array.from(document.querySelectorAll('.cards'))

  // 循环绑定点击事件
  itemDiv.forEach(async (ele) => {
    ele.addEventListener('click', () => {
      // console.log(ele)

      // 添加样式
      ele.classList.add('fullscreen', 'expand', 'top')
      // 隐藏其它元素
      const otherItems = itemDiv.filter((item) => item !== ele)
      otherItems.forEach((item) => item.classList.add('hideItem'))
      // 获取标题和内容元素
      const [itemTitle, itemContent] = [...ele.children]
      itemTitle.classList.add('hideTitle', 'transition')
      itemContent.classList.add('showContent', 'transition-delay')
      let index = ele.getAttribute('data-index') - 1
      // console.log(index)
      // 插入卡片
      addCardHtml(index)
        .then((html) => {
          // console.log(html)
          cards[index].innerHTML = html
        })
        .catch((err) => {
          cards[index].innerHTML = err
        })
    })
  })

  // 缩小分区
  const closeBtn = Array.from(document.querySelectorAll('.close'))
  // 循环绑定点击事件
  closeBtn.forEach((ele) => {
    ele.addEventListener('click', (event) => {
      event.stopPropagation()
      // 获取父元素，移除添加的类名
      const parent = ele.parentNode.parentNode
      parent.classList.remove('fullscreen', 'expand')
      // 移除其它元素的隐藏
      const otherItems = itemDiv.filter((item) => item !== parent)
      otherItems.forEach((item) => item.classList.remove('hideItem'))
      // 获取标题和内容
      const [itemTitle, itemContent] = [...parent.children]
      itemTitle.classList.remove('hideTitle', 'transition')
      itemContent.classList.remove('showContent', 'transition-delay')
      itemTitle.classList.add('transition-delay')
      itemContent.classList.add('transition')
      setTimeout(() => parent.classList.remove('top'), 600)
    })
  })
}

const addCardHtml = async (index) => {
  const jsonDataPath = ['../data/01-10.json', '../data/11-20.json', '../data/21-30.json', '../data/31-40.json', '../data/41-50.json']
  const headerConfig = {
    headers: {
      Accept: 'application/json',
    },
  }

  return new Promise((resolve, reject) => {
    fetch(jsonDataPath[index], headerConfig)
      // 将响应数据解析为 JSON
      .then((res) => res.json())
      .then((data) => {
        // 处理解析后的 JSON 数据
        // console.log(data)
        let cardHtml = ''
        for (let i = 0; i < data.length; i++) {
          cardHtml += `
        <div class="card">
          <img src="../${data[i].projectName}/${data[i].projectImg}" />
          <div>
            <h2>第 ${index * 10 + i + 1} 个案例</h2>
            <h3 style="margin-top: 20px;">密码长度改变图片模糊</h3>
            <a href="../${data[i].projectName}/index.html">查看效果</a>
          </div>
        </div>
        `
        }
        resolve(cardHtml)
      })
      .catch((error) => {
        console.log(error)
        reject('数据加载失败')
      })
  })
}
