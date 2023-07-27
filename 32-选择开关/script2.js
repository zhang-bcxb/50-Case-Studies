const checkBoxElements = document.querySelectorAll(".toggle-container input[type='checkbox']")

// 循环绑定事件
checkBoxElements.forEach((item) =>
  item.addEventListener('change', (e) => {
    // 获取当前点击开关的索引
    const index = Array.from(checkBoxElements).indexOf(e.target)
    console.log(checkBoxElements)
    console.log(e.target)
    console.log(Array.from(checkBoxElements))

    // 三个开关都选中
    if (Array.from(checkBoxElements).every((v) => v.checked)) {
      if (index === 0) {
        checkBoxElements[2].checked = false
      } else if (index === 1) {
        checkBoxElements[0].checked = false
      } else {
        checkBoxElements[1].checked = false
      }
    }
  })
)
