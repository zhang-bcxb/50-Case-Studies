const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
// 获取 5 行
const rows = 5

// 生成 15 个图片
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')
  // 根据随机图片尺寸获得图片
  img.src = `${unsplashURL}${getRandowmSize()}`
  // console.log(img.src)
  container.appendChild(img)
}

// 获得随机的图片尺寸
function getRandowmSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

// 获取单个随机尺寸
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}
