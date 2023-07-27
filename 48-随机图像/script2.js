const refreshURL = 'https://source.unsplash.com/random/'

const container = document.querySelector('.container')

function onLoad(rows = 5) {
  container.innerHTML = ''
  for (let i = 0; i < rows * 3; i++) {
    const imageItem = document.createElement('img')
    imageItem.src = `${refreshURL}${getRandomSize()}`
    imageItem.alt = 'random image-' + i
    imageItem.loading = 'lazy'
    container.appendChild(imageItem)
  }
}

function getRandomSize() {
  return `${getRandomValue()}x${getRandomValue()}`
}
function getRandomValue() {
  return Math.floor(Math.random() * 10) + 300
}

window.onload = onLoad()
