const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// 函数对象
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// 绑定点击事件，复制密码
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  // 复制文本
  document.execCommand('copy')

  // 销毁盒子
  textarea.remove()
  alert('密码复制成功')
})

// 绑定点击事件，生成密码
generateEl.addEventListener('click', () => {
  // 获取生成密码长度
  const length = +lengthEl.value

  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked
  // console.table({ hasLower, hasUpper, hasNumber, hasSymbol })

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

// 生成密码
function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = ''
  // 得到选中的类型个数,后面作为循环的步长
  const typesCount = lower + upper + number + symbol
  // console.log(typesCount)
  // 类型数组,得到选中的对象
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => {
    return Object.values(item)[0]
  })
  // console.log(typesArr)

  // 都没选中,就直接返回空字符串
  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      // Object.keys() 获得对象的所有的键名,返回一个数组 
      // 例如:Object.keys({lower:true}) => ['lower']
      const funcName = Object.keys(type)[0]
      // 执行方法
      generatePassword += randomFunc[funcName]()
      // console.log('generatePassword: ', generatePassword)
    })
  }
  // 截取固定长度在字符串
  const finalPassword = generatePassword.slice(0, length)

  return finalPassword
}

// 随机小写字母
function getRandomLower() {
  // a-z：97-122，A-Z：65-90，0-9：48-57。
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// 随机大写字母
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// 随机数字
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// 随机特殊字符
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
