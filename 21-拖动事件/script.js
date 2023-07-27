const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// 拖拽开始
fill.addEventListener('dragstart', dargStart)
// 拖拽结束
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  // dragover：在一个元素上拖拽其他元素时触发的事件
  empty.addEventListener('dragover', dragOver)
  // dragenter：在一个元素被拖拽进入另一个元素的可拖放区域时触发的事件
  empty.addEventListener('dragenter', dragEnter)
  // dragleave：在一个元素被拖拽离开另一个元素的可拖放区域时触发的事件
  empty.addEventListener('dragleave', dragLeave)
  // drop：在一个元素上释放被拖拽的元素时触发的事件
  empty.addEventListener('drop', dragDrop)
}

// empties.forEach((empty) => {
//     empty.addEventListener('dragover', dragOver)
//     empty.addEventListener('dragenter', dragEnter)
//     empty.addEventListener('dragleave', dragLeave)
//     empty.addEventListener('drop', dragDrop)
// })

// 拖拽开始，增加可拖拽盒子的边框样式
function dargStart() {
  this.className += ' hold'
}

// 拖拽结束，还原样式
function dragEnd() {
  this.className = 'fill'
}

// 阻止默认事件
function dragOver(e) {
  e.preventDefault()
}

// 拖拽时，触碰到空盒子的样式
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
  console.log('enter')
}

// 离开空盒子时，还原样式
function dragLeave() {
  this.className = 'empty'
}

// 释放拖拽的元素
function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
