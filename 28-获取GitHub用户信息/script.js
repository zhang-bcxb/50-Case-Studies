const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// 获取用户数据
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    // console.log(data)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('没有找到该人')
    }
  }
}

// 获取创建的项目名称
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    // console.log(data)
    addReposToCard(data)
  } catch (err) {
    createErrorCard('获取不到repos')
  }
}

// 创建错误卡片
function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
          <h1>${msg}</h1>
        </div>
        `
  main.innerHTML = cardHTML
}

// 创建用户卡片
function createUserCard(user) {
  const userID = user.name || user.login
  const userBio = user.bio ? `<p>${user.bio}</p>` : 'bio不存在'
  const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userID}</h2>
            ${userBio}
            <ul>
                <li>${user.followers} <strong>Followes</strong> </li>
                <li>${user.following} <strong>Following</strong> </li>
                <li>${user.public_repos} <strong>Repos</strong> </li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
    `
  main.innerHTML = cardHTML
}

// 创建项目标签
function addReposToCard(repos) {
  // console.log(repos)
  const reposEL = document.getElementById('repos')

  // 只取前五个
  repos.slice(0, 5).forEach((repo) => {
    // 创建 a 标签
    const repoEL = document.createElement('a')
    repoEL.classList.add('repo')
    repoEL.href = repo.html_url
    repoEL.target = '_blank'
    repoEL.innerText = repo.name

    reposEL.appendChild(repoEL)
  })
}

// 绑定提交事件
form.addEventListener('submit', (e) => {
  // 阻止默认事件
  e.preventDefault()
  // 获取数据的数据
  const user = search.value || 'zhang-bcxb'

  // 判断用户是否存在zhang-bcxb
  if (user) {
    getUser(user)
    search.value = ''
  }
})
