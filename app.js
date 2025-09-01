const startNowBtn = document.getElementById("start-now-butn");
const startpage = document.getElementById("start");
const questionPage = document.getElementById("q-page");

startNowBtn.addEventListener("click", ()=> {
    startpage.classList.add("disable");
    console.log("clicked");
    correctAudio.play()
    questionPage.classList.remove("disable")
})

const data = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        option: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        option: ["<!-- comment -->", "Both /* comment */ & // comment", "/* comment */", "// comment"],
        answer: "Both /* comment */ & // comment"
    },
    {
        question: "Which symbol is used for strict equality comparison?",
        option: ["===", "==", "=", "!="],
        answer: "==="
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        option: ["null", "0", "undefined", "false"],
        answer: "undefined"
    },
    {
        question: "Which function is used to print something in the browser console?",
        option: ["console.print()", "print()", "console.log()", "log.console()"],
        answer: "console.log()"
    },
    {
        question: "Which data type is NOT primitive in JavaScript?",
        option: ["String", "Number", "Object", "Boolean"],
        answer: "Object"
    },
    {
        question: "Which method converts a JSON string to a JavaScript object?",
        option: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "object.JSON()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        option: ["&", ".", ",", "+",],
        answer: "+"
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        option: ["var x", "let x", "const x", "constant x"],
        answer: "const x"
    },
    {
        question: "Which method removes the last element from an array?",
        option: ["pop()", "push()", "shift()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        option: ["for loop", "while loop", "do...while loop", "for...in loop"],
        answer: "do...while loop"
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        option: ["def", "function", "fun", "fn"],
        answer: "function"
    }
];

const finishBtn = document.getElementById("finishBtn");
const nextBtn = document.getElementById("nextBtn");
const questionNoH3 = document.querySelector("#questionNo")
const error =  document.getElementById("error")
let isAttempt =  false;
//audios
const correctAudio = new Audio("assets/correct.mp3");
const incorrectAudio = new Audio("assets/incorrect.mp3");

let marks = 0;
let questionNo = 1;
nextBtn.addEventListener("click",() => {
    const allOption = document.querySelectorAll(".answer");
    if (isAttempt) {
        questionNo++;
        isAttempt = false
    allOption.forEach((option) => {
        option.classList.remove("incorrect");
        option.classList.remove("correct");
        error.textContent = ""
        ask () 
    })

    } else {
        incorrectAudio.play();
        error.textContent = "Please select the option to proceed next"
    }
})
const optionArry = document.querySelectorAll(".option");
const question = document.getElementById("question");

//audios

function ask () {
    optionArry.forEach((e, index) => {
        
        e.textContent = data[questionNo - 1].option[index];
      
    })
    question.textContent = data[questionNo - 1].question
    
    if(questionNo == 12) {
        nextBtn.classList.add("disable");
        finishBtn.classList.remove("disable");
    }
    questionNoH3.textContent = `${questionNo}/${data.length}`    
}

optionArry.forEach((e) => {
      e.addEventListener("click", (option) => {
            console.log(option.target.textContent)
            isAttempt = true
            if (option.target.textContent == data[questionNo - 1].answer) {
                option.target.parentElement.classList.add("correct");
                marks++ 
                console.log(marks)
                correctAudio.play();
                error.textContent = ""
                return
            } else if (option.target.textContent !== data[questionNo - 1].answer) {
                option.target.parentElement.classList.add("incorrect")
                error.textContent = ""
                incorrectAudio.play();
                optionArry.forEach((e) => {
                    if (e.textContent == data[questionNo - 1].answer) {
                        e.parentElement.classList.add("correct")
                    }
                } )
            }
            console.log(marks, " marks")
        })
})
const card = document.getElementById("card");
const overLay = document.getElementById("overLay");
const totalMarks = document.getElementById("totalMarks");
const progressbar = document.getElementById("progressbar");
finishBtn.addEventListener("click", () => {
    overLay.classList.add("overLayOpen")
    card.classList.add("openCard")
    totalMarks.textContent = `${marks}/${data.length}`
    const persent = (marks / data.length) * 100;
    console.log(persent)
    progressbar.style.width = `${persent}%`;
    correctAudio.play()
    
})
const tryagain = document.getElementById("try");
tryagain.addEventListener("click", ()=> {
    marks = 0
    questionNo = 0
    startpage.classList.remove("disable")
    questionPage.classList.add("disable")
    overLay.classList.remove("overLayOpen")
    card.classList.remove("openCard")

})

ask ()