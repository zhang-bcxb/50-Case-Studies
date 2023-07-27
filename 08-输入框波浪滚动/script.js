const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  // 获取 label 标签中的文字
  label.innerHTML = label.innerText
    .split('') // 分解
    // 获取单个文字，处理成 span 标签，然后返回字符串
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('') // 拼接
})
