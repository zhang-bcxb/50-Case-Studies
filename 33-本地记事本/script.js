const addBtn = document.getElementById('add')

// 获取浏览器中的记事本数据
const notes = JSON.parse(localStorage.getItem('notes'))
// console.log(notes)

// 创建记事本
if (notes) {
  notes.forEach((note) => addNewNote(note))
}

// 绑定点击事件
addBtn.addEventListener('click', () => addNewNote())

// 添加新的记事本面板
function addNewNote(text = '') {
  // console.log(text)
  // 创建标签
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

  // 按钮获取
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  textArea.value = text
  // innerHTML 默认会将文本转成 HTML
  // marked函数：text进行标记化处理，通常用于将文本转换为HTML
  main.innerHTML = marked(text)

  // 删除按钮
  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

  // 编辑按钮
  editBtn.addEventListener('click', () => {
    // 切换样式
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  // 绑定输入事件
  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)
    console.log(marked(value))
    updateLS()
  })

  document.body.appendChild(note)
}

// 更新记事本数据
function updateLS() {
  const noteText = document.querySelectorAll('textarea')
  const notes = []

  // 添加数据
  noteText.forEach((note) => notes.push(note.value))
  console.log(notes)

  // 持久化记事本数据
  localStorage.setItem('notes', JSON.stringify(notes))
}
