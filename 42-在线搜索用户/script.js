const result = document.getElementById('result')
const filter = document.getElementById('filter')

// 保存创建的 li 标签
const listItems = []

getData()
// 输入框绑定事件，查找数据
filter.addEventListener('input', (e) => filterData(e.target.value))

// 获取数据
async function getData() {
  // Fetch API 提供了一个 JavaScript 接口，跨网络异步获取资源。
  const res = await fetch('https://randomuser.me/api?results=10')
  const { results } = await res.json()
  // console.log(results)

  // 插入的列表项
  result.innerHTML = ''

  results.forEach((user) => {
    // 创建 li
    const li = document.createElement('li')
    listItems.push(li)

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
    //  appendChild(newchild) 方法可向当前节点的子节点列表的末尾添加新的子节点
    // insertBefore(newchild, refchild) 方法可向当前节点的子节点列表的开头添加新的子节点
    result.appendChild(li)
  })
}

// 搜索
function filterData(searchTerm) {
  listItems.forEach((item) => {
    // 将搜索到的进行显示，没搜索到的进行隐藏
    // item.innerText 获取文本，将英文都转成小写，然后进行查找（模糊查询）
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
