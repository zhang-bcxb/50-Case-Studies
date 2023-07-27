const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const $ = (v) => document.querySelector(v)
const search = $('#search')
const list = $('#movie-list')

// 获取电影数据
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  showMovies(data.results)
}

// 显示电影数据
function showMovies(movies) {
  // 清除盒子内容
  list.innerHTML = ''
  // 即将插入的内容
  let html = ''
  // 动态创建标签
  movies.forEach((movie) => {
    // 解构赋值
    const { title, vote_average, overview, poster_path } = movie
    html += `
            <li class="movie">
                <img src="${IMG_PATH + poster_path}" alt="图片加载中">
                <div class="movie-info">
                    <h3 class="movie-name">${title}</h3>
                    <span class="movie-score ${setVoteClass(vote_average)}">${vote_average}</span>
                </div>
                <div class="movie-overview">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                </div>
            </li>
        `
  })
  list.innerHTML = html
}

// 电影评分
function setVoteClass(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

// 搜索电影
function searchMovies() {
  //
  search.addEventListener('keydown', (e) => {
    // 按下回车键
    if (e.keyCode === 13) {
      // 将空白字符替换成空
      let value = e.target.value.replace(/\s+/, '')
      if (value) {
        // 搜索关键字:Bionicle
        getMovies(SEARCH_API + value)
        // 一秒后,清除搜索框内容
        setTimeout(() => {
          e.target.value = ''
        }, 1000)
      } else {
        // 刷新页面
        window.location.reload(true)
      }
    }
  })
}
window.onload = () => {
  getMovies(API_URL)
  searchMovies()
}
