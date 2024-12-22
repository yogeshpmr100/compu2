// script.js - Last updated: 2024-12-22 21:12:49

const questions = [
    {
        question: "Which of the following can be defined as series of commands written in a plain text file?",
        options: ["Shell Script", "Javascript", "Program", "None"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Shell Script are commonly used by the user for...",
        options: ["Routine individual tasks", "System administration tasks", "Both (a) and (b)", "None of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which types of text editors available to serve the purpose of writing shell scripts?",
        options: ["vi or vim", "nano", "pico, ed", "All"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Gedit is a graphical editor available with _____ desktop environment.",
        options: ["GNOME", "GNORM", "GNAME", "GNOMES"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Kwriter is a graphical editor available with _______ desktop environment.",
        options: ["KED", "KAD", "KDE", "KOD"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which is a visual display editor to write the shell script?",
        options: ["vim", "gedit", "KDE", "None"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The Vim is a text editor written by________.",
        options: ["Bram Moolenaar", "Brain Moolenaar", "Mram Mool", "None of these"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The Vim text editor released publicly in...",
        options: ["1992", "1995", "1991", "1990"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The Vim editor function in ___ different modes.",
        options: ["1", "2", "3", "4"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which of the following is the mode of Vim?",
        options: ["command mode", "insert mode", "last mode", "All"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "An extension to the command mode is...",
        options: ["command mode", "visual mode", "(a) and (b)", "none of these"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which mode is a flexible and easy way to select a piece of text from file?",
        options: ["command mode", "visual mode", "both (a) and (b)", "none of these"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which command is used for switch to the block-visual mode?",
        options: ["v", "V", "ctrl + v", "none of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "In which mode we can type text into our file or navigate within the file?",
        options: ["command mode", "insert mode", "last mode", "all of these"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "To toggle between the command mode and the insert mode, press which key?",
        options: ["Enter", "Shift", "Esc", "Home key"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which command is used to insert text before the current cursor position?",
        options: ["a", "i", "A", "I"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which command is used to append text at the end of the current line?",
        options: ["a", "i", "A", "I"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which mode is used for operations like quitting the Vim session or saving a file?",
        options: ["command mode", "insert mode", "last line mode", "none of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "In command mode, we can go to last line mode by pressing which key?",
        options: ["$", "?", ":", "*"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "By default, editor will start in which mode?",
        options: ["command mode", "insert", "last line", "none of these"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "To save the file, switch to which mode from the insert mode?",
        options: ["command mode", "last line mode", "(a) and (b)", "none of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which command is used to save file and quit editing mode?",
        options: [":wr", ":wy", ":wq", ":wp"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which command will be used to quit editing mode when no changes are made?",
        options: [":q", ":q!", ":x", ":x!"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "When vim editor is opened without typing file name, the text will be directly stored in the...",
        options: ["system buffer", "local disk", "binary disk", "none of these"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which command will be used to move cursor in left direction?",
        options: ["l", "j", "k", "h"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which command will be used to move cursor in down direction?",
        options: ["j", "k", "l", "h"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which command will be used to scroll down one half of a page?",
        options: ["-/+ key", "ctrl + d", "ctrl + u", "ctrl + f"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which command will be used to move the cursor top of the page?",
        options: ["Ctrl + b", "M", "H", "L"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which command will be used to move the cursor end of file?",
        options: ["$", ")", "(", "G"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which of the following is the extension of shell script file?",
        options: ["st", "sp", "sh", "none"],
        correctAnswer: 2,
        difficulty: "easy"
    }
];

// Rest of your JavaScript code remains the same...


let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 30 minutes
let timer;
let answeredQuestions = new Array(questions.length).fill(false);

// Initialize Quiz
function initializeQuiz() {
    loadQuestion();
    startTimer();
    createQuestionGrid();
    updateProgress();
    
    // Mobile menu toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('active');
    });

    // Remove welcome animation after delay
    setTimeout(() => {
        const welcomeAnimation = document.querySelector('.welcome-animation');
        if (welcomeAnimation) {
            welcomeAnimation.style.display = 'none';
        }
    }, 4000);
}

// Load Question
function loadQuestion() {
    const question = questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const difficultyBadge = document.getElementById('difficultyBadge');

    if (questionText && optionsGrid && currentQuestionNum && difficultyBadge) {
        questionText.textContent = question.question;
        currentQuestionNum.textContent = currentQuestion + 1;
        difficultyBadge.textContent = question.difficulty;

        optionsGrid.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.onclick = () => checkAnswer(index);
            button.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionsGrid.appendChild(button);
        });
    }

    updateNavigationButtons();
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (answeredQuestions[currentQuestion]) return;

    const question = questions[currentQuestion];
    const options = document.getElementsByClassName('option');

    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        showFeedback(true);
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correctAnswer].classList.add('correct');
        showFeedback(false);
    }

    answeredQuestions[currentQuestion] = true;
    updateScore();
    updateProgress();
    updateQuestionGrid();
    
    // Check if all questions are answered
    checkQuizCompletion();
}

// Check Quiz Completion
function checkQuizCompletion() {
    if (answeredQuestions.filter(Boolean).length === questions.length) {
        showResults();
    }
}

// Navigation Functions
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

// Timer Functions
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeLeftElement = document.getElementById('timeLeft');
    if (timeLeftElement) {
        timeLeftElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// UI Update Functions
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
    }
}

function updateScore() {
    const scoreElements = document.querySelectorAll('#score');
    scoreElements.forEach(element => {
        element.textContent = score;
    });
}

function showFeedback(isCorrect, message = null) {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = `feedback-modal ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackModal.textContent = message || (isCorrect ? 'Correct!' : 'Incorrect!');
    
    document.body.appendChild(feedbackModal);
    
    setTimeout(() => {
        feedbackModal.remove();
    }, 2000);
}

function createQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    if (grid) {
        grid.innerHTML = '';
        questions.forEach((_, index) => {
            const button = document.createElement('button');
            button.className = 'question-dot';
            button.onclick = () => jumpToQuestion(index);
            grid.appendChild(button);
        });
        updateQuestionGrid();
    }
}

function updateQuestionGrid() {
    const dots = document.getElementsByClassName('question-dot');
    Array.from(dots).forEach((dot, index) => {
        dot.className = 'question-dot';
        if (index === currentQuestion) dot.classList.add('current');
        if (answeredQuestions[index]) dot.classList.add('answered');
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
    updateProgress();
    updateQuestionGrid();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }
}

function showResults() {
    clearInterval(timer);
    
    const resultsModal = document.getElementById('resultsModal');
    const finalScore = document.getElementById('finalScore');
    const accuracy = document.getElementById('accuracy');
    const timeTaken = document.getElementById('timeTaken');
    
    if (resultsModal && finalScore && accuracy && timeTaken) {
        const accuracyValue = ((score / questions.length) * 100).toFixed(1);
        const timeSpent = 1800 - timeLeft;
        
        finalScore.textContent = `${score}/${questions.length}`;
        accuracy.textContent = `${accuracyValue}%`;
        timeTaken.textContent = 
            `${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}`;
        
        resultsModal.classList.add('show');
        
        // Add restart button if not already present
        const restartBtn = document.querySelector('.restart-btn');
        if (!restartBtn) {
            const btn = document.createElement('button');
            btn.className = 'restart-btn';
            btn.innerHTML = '<i class="fas fa-redo"></i> Restart Quiz';
            btn.onclick = restartQuiz;
            resultsModal.appendChild(btn);
        }
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1800;
    answeredQuestions = new Array(questions.length).fill(false);
    
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) {
        resultsModal.classList.remove('show');
    }
    
    // Reset all states
    updateQuestionGrid();
    updateProgress();
    updateScore();
    
    // Reset timer
    clearInterval(timer);
    startTimer();
    
    // Load first question
    loadQuestion();
    
    // Show welcome message for restart
    showFeedback(true, 'Quiz Restarted! Good Luck!');
}

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        // Convert key press 1-4 to 0-3 index
        checkAnswer(parseInt(e.key) - 1);
    }
});

// Initialize when page loads
window.onload = initializeQuiz;
