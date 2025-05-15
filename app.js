// app.js - 主應用程序邏輯

// DOM 元素
let questionContainer;
let questionText;
let optionsContainer;
let submitButton;
let nextButton;
let resultContainer;
let scoreDisplay;
let progress;
let explanationText;

// 測驗狀態
let currentQuestionIndex;
let selectedQuestions = [];
let score = 0;
let answered = false;
let totalQuestions = 10; // 設定每次測驗的題目數量

// 當 DOM 加載完成時初始化
document.addEventListener('DOMContentLoaded', () => {
    // 獲取 DOM 元素
    questionContainer = document.getElementById('question-container');
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    submitButton = document.getElementById('submit-button');
    nextButton = document.getElementById('next-button');
    resultContainer = document.getElementById('result-container');
    scoreDisplay = document.getElementById('score-display');
    progress = document.getElementById('progress');
    explanationText = document.getElementById('explanation');

    // 設置事件監聽器
    submitButton.addEventListener('click', submitAnswer);
    nextButton.addEventListener('click', nextQuestion);
    document.getElementById('restart-button').addEventListener('click', () => {
        questionContainer.style.display = 'block';
        initializeQuiz();
    });

    // 初始化測驗
    initializeQuiz();
});

// 初始化測驗
function initializeQuiz() {
    // 重置狀態
    score = 0;
    answered = false;

    // 檢查是否有足夠的題目
    if (!questions || questions.length === 0) {
        alert('題庫數據未載入！請確保 questions.js 文件正確設置。');
        return;
    }

    // 選擇隨機題目
    selectedQuestions = getRandomQuestions(Math.min(totalQuestions, questions.length));
    currentQuestionIndex = 0;

    // 更新進度
    updateProgress();

    // 顯示第一個問題
    displayQuestion();

    // 重置結果區域
    resultContainer.style.display = 'none';
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';

    // 重置分數顯示
    scoreDisplay.textContent = '';
}

// 獲取隨機題目
function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 顯示當前問題
function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];

    // 清除選項容器
    optionsContainer.innerHTML = '';

    // 設置問題文本
    questionText.innerHTML = `${currentQuestionIndex + 1}. \ <${question.id}>\  ${question.q}`;

    // 創建選項
    for (const [key, value] of Object.entries(question.options)) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const label = document.createElement('label');
        label.htmlFor = `option-${key}`;
        label.className = 'option-label';

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'quiz-option';
        radioInput.id = `option-${key}`;
        radioInput.value = key;

        label.appendChild(radioInput);
        label.appendChild(document.createTextNode(`${key}: ${value}`));
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    }

    // 重置解釋文本
    explanationText.textContent = '';
    explanationText.style.display = 'none';
}

// 提交答案
function submitAnswer() {
    if (answered) return;

    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');

    if (!selectedOption) {
        alert('請選擇一個答案！');
        return;
    }

    answered = true;
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedOption.value === currentQuestion.answer;

    if (isCorrect) {
        score++;
    }

    // 顯示正確和錯誤的選項
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        const input = option.querySelector('input');
        const label = option.querySelector('label');

        if (input.value === currentQuestion.answer) {
            option.classList.add('correct');
        } else if (input.checked && input.value !== currentQuestion.answer) {
            option.classList.add('wrong');
        }

        input.disabled = true;
    });

    // 顯示解釋
    explanationText.textContent = currentQuestion.explanation;
    explanationText.style.display = 'block';

    // 隱藏提交按鈕並顯示下一題按鈕
    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
}

// 下一題
function nextQuestion() {
    currentQuestionIndex++;
    answered = false;

    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
        submitButton.style.display = 'block';
        nextButton.style.display = 'none';
        updateProgress();
    } else {
        finishQuiz();
    }
}

// 完成測驗
function finishQuiz() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = `你的得分：${score} / ${selectedQuestions.length}`;

    // 顯示重新開始按鈕
    document.getElementById('restart-button').style.display = 'block';
}

// 更新進度
function updateProgress() {
    progress.textContent = `題目 ${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
}

function createOptions(options, answer) {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    Object.keys(options).forEach(key => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = `${key}. ${options[key]}`;

        optionDiv.addEventListener('click', function() {
            // 移除其他選項的selected類
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // 為當前選項添加selected類
            this.classList.add('selected');

            // 其他選擇邏輯保持不變
            checkAnswer(key, answer);
        });

        optionsContainer.appendChild(optionDiv);
    });
}
