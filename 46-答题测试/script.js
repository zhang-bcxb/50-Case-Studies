// 问题数据
const quizData = [
  {
    question: '【1】你喜欢小明还是小红 ?',
    a: '小红',
    b: '小明',
    c: '乔木',
    d: '不喜欢',
    correct: 'a',
  },
  {
    question: '【2】你喜欢小明还是小红 ?',
    a: '小红',
    b: '小明',
    c: '乔木',
    d: '不喜欢',
    correct: 'b',
  },
  {
    question: '【3】你喜欢小明还是小红 ?',
    a: '小红',
    b: '小明',
    c: '乔木',
    d: '不喜欢',
    correct: 'c',
  },

  {
    question: '【4】你喜欢小明还是小红 ?',
    a: '小红',
    b: '小明',
    c: '乔木',
    d: '不喜欢',
    correct: 'd',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// 当前的问题
let currentQuiz = 0
// 答对的数量
let score = 0

loadQuiz()

// 加载问题
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEL.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

// 将问题的默认选中设置为 false
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

// 获得选中的选项ID
function getSelected() {
  let answer
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

// 绑定点击事件
submitBtn.addEventListener('click', () => {
  // 获得选中的ID
  const answer = getSelected()
  if (answer) {
    // 选对
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      // 加载下一题
      loadQuiz()
    } else {
      // 答完提示
      quiz.innerHTML = `
            <h2>你答对了${score}/${quizData.length}个问题</h2>
            <button onclick="location.reload()">重新加载</button>
            `
    }
  }
})
