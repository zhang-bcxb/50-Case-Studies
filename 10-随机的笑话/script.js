const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// 绑定事件
jokeBtn.addEventListener('click', getjoke)
// 最开始调用一次
getjoke()

// 获取笑话
async function getjoke() {
  // 配置请求头
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  // 发起请求
  const res = await fetch('https://icanhazdadjoke.com', config)
  console.log('res: ', res)
  // 获取笑话相关的数据
  // 将响应数据解析为 JSON
  const data = await res.json()
  console.log('data: ', data)
  // 显示数据
  jokeEl.innerHTML = data.joke
}

async function getjoke2() {
  const headerConfig = {
    headers: {
      Accept: 'application/json',
    },
  }
  fetch('res.json', headerConfig)
    // 将响应数据解析为 JSON
    .then((res) => res.json())
    .then((data) => {
      // 处理解析后的 JSON 数据
      console.log(data)
    })
}
getjoke2()
