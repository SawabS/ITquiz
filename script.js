document.addEventListener("DOMContentLoaded", () => {
    const questions = [
    {
        question: "1. What is the function of a DNS (Domain Name System)?",
        answers: [
            { label: "A.", text: "Encrypts web data for secure communication", correct: false },
            { label: "B.", text: "Maps domain names to IP addresses", correct: true },
            { label: "C.", text: "Manages network traffic", correct: false },
            { label: "D.", text: "Provides internet connection to devices", correct: false }
        ]
    },
    {
        question: "2. Which of the following protocols is used to transfer files between a client and a server?",
        answers: [
            { label: "A.", text: "HTTP", correct: false },
            { label: "B.", text: "FTP", correct: true },
            { label: "C.", text: "SMTP", correct: false },
            { label: "D.", text: "TCP", correct: false }
        ]
    },
    {
        question: "3. In programming, what does 'OOP' stand for?",
        answers: [
            { label: "A.", text: "Object-Oriented Programming", correct: true },
            { label: "B.", text: "Operating-Oriented Process", correct: false },
            { label: "C.", text: "Online Operating Program", correct: false },
            { label: "D.", text: "Overlapped Output Processing", correct: false }
        ]
    },
    {
        question: "4. Which of the following is NOT an example of an operating system?",
        answers: [
            { label: "A.", text: "Linux", correct: false },
            { label: "B.", text: "Android", correct: false },
            { label: "C.", text: "Microsoft Office", correct: true },
            { label: "D.", text: "Windows", correct: false }
        ]
    },
    {
        question: "5. What is the main purpose of a firewall in computer networks?",
        answers: [
            { label: "A.", text: "To manage bandwidth", correct: false },
            { label: "B.", text: "To block unauthorized access", correct: true },
            { label: "C.", text: "To optimize server performance", correct: false },
            { label: "D.", text: "To enable faster internet speeds", correct: false }
        ]
    },
    {
        question: "6. Which programming language is considered the foundation for web development (client-side)?",
        answers: [
            { label: "A.", text: "Python", correct: false },
            { label: "B.", text: "JavaScript", correct: true },
            { label: "C.", text: "C++", correct: false },
            { label: "D.", text: "PHP", correct: false }
        ]
    },
    {
        question: "7. Which type of storage device uses magnetic disks to store data?",
        answers: [
            { label: "A.", text: "Solid State Drive (SSD)", correct: false },
            { label: "B.", text: "Hard Disk Drive (HDD)", correct: true },
            { label: "C.", text: "Flash Drive", correct: false },
            { label: "D.", text: "Optical Disc", correct: false }
        ]
    },
    {
        question: "8. What does 'HTTP' stand for?",
        answers: [
            { label: "A.", text: "HyperText Transfer Protocol", correct: true },
            { label: "B.", text: "HyperText Transmission Path", correct: false },
            { label: "C.", text: "High Transfer Transmission Protocol", correct: false },
            { label: "D.", text: "Hyper Transmission Transfer Path", correct: false }
        ]
    },
    {
        question: "9. Which of the following is a method of ensuring the integrity of data?",
        answers: [
            { label: "A.", text: "Data Encryption", correct: false },
            { label: "B.", text: "Data Masking", correct: false },
            { label: "C.", text: "Data Backup", correct: false },
            { label: "D.", text: "Data Hashing", correct: true }
        ]
    },
    {
        question: "10. Which cloud computing service provides virtualized computing resources over the internet?",
        answers: [
            { label: "A.", text: "PaaS (Platform as a Service)", correct: false },
            { label: "B.", text: "SaaS (Software as a Service)", correct: false },
            { label: "C.", text: "IaaS (Infrastructure as a Service)", correct: true },
            { label: "D.", text: "DaaS (Data as a Service)", correct: false }
        ]
    }
];
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const scoreContainer = document.getElementById('score-container');  // score container to HTML

    let currentQuestionIndex = 0;
    let score = 0; // Variable to track score

    function showQuestion(question) {
        questionContainer.querySelector('#question').innerText = question.question;
        answerButtons.innerHTML = '';
        question.answers.forEach(answer => {
            const li = document.createElement('li');

            // label (A, B, C, D)
            const label = document.createElement('span');
            label.innerText = answer.label;
            label.classList.add('answer-label');

            // button for the answer
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer.correct, button)); // Pass if answer is correct

            // Appending label and button to list item
            li.appendChild(label);
            li.appendChild(button);
            answerButtons.appendChild(li);
        });
    }

    function selectAnswer(isCorrect, selectedButton) {
        // Resetting the color of all buttons to default (white)
        Array.from(answerButtons.querySelectorAll('button')).forEach(button => {
            button.style.color = '#ffffff';  // Resetting color to white
        });

        // Applying orange color to the selected button
        selectedButton.style.color = '#ff6600';

        // Updating score if the answer is correct
        if (isCorrect) {
            score++; // Increment score for correct answer
        }

        // Showing the Next button after an answer is selected
        nextButton.style.display = 'block';
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0; // Resetting the score for a new quiz
        nextButton.style.display = 'none';
        scoreContainer.innerText = ''; // Clearing the score display
        showQuestion(questions[currentQuestionIndex]);
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.style.display = 'none';
        } else {
            // Quiz is completed, show the score
            showScore();
        }
    });

    function showScore() {
        scoreContainer.innerText = `You scored ${score} out of ${questions.length}!`; // Display score
        nextButton.style.display = 'none'; // Hiding the Next button after quiz is done
    }

    startQuiz();
});