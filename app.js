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

    document.getElementById('restart-button').style.display = 'block';
}

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
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });

            this.classList.add('selected');
            checkAnswer(key, answer);
        });

        optionsContainer.appendChild(optionDiv);
    });
}
