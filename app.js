let questionContainer;
let questionText;
let optionsContainer;
let submitButton;
let nextButton;
let resultContainer;
let scoreDisplay;
let progress;
let explanationText;

let currentQuestionIndex;
let selectedQuestions = [];
let score = 0;
let answered = false;
let totalQuestions = 10;

document.addEventListener('DOMContentLoaded', () => {
    questionContainer = document.getElementById('question-container');
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    submitButton = document.getElementById('submit-button');
    nextButton = document.getElementById('next-button');
    resultContainer = document.getElementById('result-container');
    scoreDisplay = document.getElementById('score-display');
    progress = document.getElementById('progress');
    explanationText = document.getElementById('explanation');

    submitButton.addEventListener('click', submitAnswer);
    nextButton.addEventListener('click', nextQuestion);
    document.getElementById('restart-button').addEventListener('click', () => {
        resultContainer.style.display = 'none';
        document.getElementById('history-container').style.display = 'none';
        document.getElementById('answer-history').innerHTML = '';
        questionContainer.style.display = 'block';
        initializeQuiz();
    });

    initializeQuiz();
});

function initializeQuiz() {
    score = 0;
    answered = false;

    if (!questions || questions.length === 0) {
        alert('題庫數據未載入！請確保 questions.js 文件正確設置。');
        return;
    }

    selectedQuestions = getRandomQuestions(Math.min(totalQuestions, questions.length));
    currentQuestionIndex = 0;

    updateProgress();
    displayQuestion();

    resultContainer.style.display = 'none';
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';

    scoreDisplay.textContent = '';
}

function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];

    optionsContainer.innerHTML = '';
    questionText.innerHTML = `${currentQuestionIndex + 1}. \ <${question.id}>\  ${question.q}`;

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

    explanationText.textContent = '';
    explanationText.style.display = 'none';
}

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

function finishQuiz() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = `你的得分：${score} / ${selectedQuestions.length}`;

    // 顯示歷史記錄容器
    const historyContainer = document.getElementById('history-container');
    historyContainer.style.display = 'block';

    // 獲取答題歷史區域
    const answerHistory = document.getElementById('answer-history');
    answerHistory.innerHTML = '';

    // 遍歷所有已答題目
    // 遍歷所有已答題目
    selectedQuestions.forEach((question, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        // 題目內容
        const questionDiv = document.createElement('div');
        questionDiv.className = 'history-question';
        questionDiv.textContent = `${index + 1}.  \ <${question.id}>\  ${question.q}`;

        // 選項列表
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'history-options';

        // 獲取該題的選擇
        const options = document.querySelectorAll('.option');
        let userAnswer = null;
        options.forEach(option => {
            const input = option.querySelector('input');
            if (input && input.checked) {
                userAnswer = input.value;
            }
        });

        Object.entries(question.options).forEach(([key, value]) => {
            const optionText = document.createElement('div');
            optionText.className = 'history-option';

            if (key === question.answer && key === userAnswer) {
                // 選擇正確
                optionText.textContent = `${key}: ${value} (正確答案✓)`;
                optionText.style.color = '#4CAF50';
            } else if (key === question.answer) {
                // 正確答案
                optionText.textContent = `${key}: ${value} (正確答案)`;
                optionText.style.color = '#4CAF50';
            } else if (key === userAnswer) {
                // 錯誤選擇
                optionText.textContent = `${key}: ${value} (你的選擇✗)`;
                optionText.style.color = '#f44336';
            } else {
                optionText.textContent = `${key}: ${value}`;
            }
            optionsDiv.appendChild(optionText);
        });

        // 解釋
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'history-answer';
        explanationDiv.textContent = `解釋：${question.explanation}`;

        historyItem.appendChild(questionDiv);
        historyItem.appendChild(optionsDiv);
        historyItem.appendChild(explanationDiv);
        answerHistory.appendChild(historyItem);
    });
    document.getElementById('restart-button').style.display = 'block';
}

function updateProgress() {
    progress.textContent = `題目 ${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
}


