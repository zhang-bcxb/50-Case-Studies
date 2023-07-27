const poke_container = document.getElementById('poke-container')
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}
// 获取所有颜色的键名
const main_types = Object.keys(colors)
// console.log('main_types: ', main_types)

// 四十个卡片
const pokemon_count = 40
// 图片路径
const imgPath = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

window.onload = () => {
  fetchPokemons()
}

// 获取所有卡片
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
  createSpan()
}

// 发起请求，并创建卡片
const getPokemon = async (id) => {
  // 请求路径
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  // 发起请求，获取数据
  const res = await fetch(url)
  const data = await res.json()
  // console.log(data)

  // 创建卡片
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  // 创建元素
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  // 第一个字母大写，然后进行拼接
  // 例如：bulbasaur =》B + ulbasaur =》Bulbasaur
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  // 不足三个字符，用 0 进行填充
  // 例如：1 =》001
  const id = pokemon.id.toString().padStart(3, '0')
  //  ['grass', 'poison']
  const poke_types = pokemon.types.map((type) => type.type.name)
  //console.log('poke_types: ', poke_types)
  // 找到颜色类型
  const type = main_types.find((type) => poke_types.indexOf(type) > -1)
  // console.log('type: ', type)

  // 得到卡片颜色
  const color = colors[type]
  // console.log('color: ', color)
  pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${imgPath + pokemon.id}.png"" alt="${name}" />
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `
  // 插入到卡片中
  pokemonEl.innerHTML = pokemonInnerHTML
  // 插入到大盒子中
  poke_container.appendChild(pokemonEl)
}

// 最后创建几个 span 使其对齐
const createSpan = () => {
  // 一个卡片的宽度：120 + 20*2 + 10*2 = 180
  // 计算需要创建的 span
  let num = Math.floor(poke_container.offsetWidth / 180) - 2
  // console.log(num)
  for (let i = 1; i <= num; i++) {
    const spanDom = document.createElement('span')
    spanDom.style.width = 180 + 'px'
    poke_container.appendChild(spanDom)
  }
}
