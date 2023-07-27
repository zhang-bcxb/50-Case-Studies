const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// 获取持久化数据
const todos = JSON.parse(localStorage.getItem('todos'))

// 有数据，就进行添加
if (todos) {
  todos.forEach((todo) => {
    addTodo(todo)
  })
}

// 提交数据
form.addEventListener('submit', (e) => {
  // 阻止默认事件
  e.preventDefault()
  // 添加列表项
  addTodo()
})

// 添加列表项
// 参数：{"text":"文本","completed":false} 或者 "文本"
function addTodo(todo) {
  // console.log(todo)
  // 获取 todo 文本
  // 获取输入的数据
  let todoText = input.value
  if (todo) {
    // todo 文本内容
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')

    // 存在 todo 并且 是完成状态，添加样式
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText
    todosUL.appendChild(todoEl)

    // 单击鼠标左键，完成 todo
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })

    // 单机鼠标右键，删除 todo
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      updateLS()
    })

    // 清除输入框
    input.value = ''
    updateLS()
  }
}

// 更新持久化数据
function updateLS() {
  let todosEl = document.querySelectorAll('li')

  const todos = []

  // 保存的数据格式：[{"text":"1111","completed":false}]
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      //contains  如果A元素包含B元素，则返回true，否则false。唯一不支持这个方法的是IE的死对头firefox。
      completed: todoEl.classList.contains('completed'),
    })
  })
  // localStorage只能存储字符，存入时将对象转为json字符串,读取时也要解析
  localStorage.setItem('todos', JSON.stringify(todos))
}
