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
        option: ["&", ".", ",", "+"],
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
    },
    {
        question: "What is the result of '2' + 2 in JavaScript?",
        option: ["4", "22", "Error", "NaN"],
        answer: "22"
    },
    {
        question: "What is the result of '2' - 2 in JavaScript?",
        option: ["0", "22", "Error", "NaN"],
        answer: "0"
    },
    {
        question: "Which company developed JavaScript?",
        option: ["Microsoft", "Netscape", "Google", "Oracle"],
        answer: "Netscape"
    },
    {
        question: "Which method adds a new element at the end of an array?",
        option: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which method adds a new element at the beginning of an array?",
        option: ["push()", "pop()", "shift()", "unshift()"],
        answer: "unshift()"
    },
    {
        question: "Which operator is used to assign a value?",
        option: ["==", "===", "=", "=>"],
        answer: "="
    },
    {
        question: "What is NaN in JavaScript?",
        option: ["Not a Number", "Negative Number", "Null as Number", "None"],
        answer: "Not a Number"
    },
    {
        question: "Which built-in method converts the elements of an array into a string?",
        option: ["join()", "concat()", "toString()", "stringify()"],
        answer: "toString()"
    },
    {
        question: "How do you round a number to the nearest integer in JavaScript?",
        option: ["Math.floor()", "Math.round()", "Math.ceil()", "parseInt()"],
        answer: "Math.round()"
    },
    {
        question: "Which function is used to parse a string to an integer?",
        option: ["parseInt()", "parseFloat()", "Number()", "int.parse()"],
        answer: "parseInt()"
    },
    {
        question: "Which function is used to parse a string to a float?",
        option: ["parseInt()", "parseFloat()", "Number()", "float.parse()"],
        answer: "parseFloat()"
    },
    {
        question: "Which keyword is used to stop a loop?",
        option: ["exit", "stop", "break", "return"],
        answer: "break"
    },
    {
        question: "Which keyword skips the current loop iteration?",
        option: ["skip", "break", "continue", "next"],
        answer: "continue"
    },
    {
        question: "What is the default value of Boolean variables in JavaScript?",
        option: ["true", "false", "undefined", "null"],
        answer: "undefined"
    },
    {
        question: "Which operator is used to check both value and type?",
        option: ["==", "===", "=", "!="],
        answer: "==="
    },
    {
        question: "Which method returns the number of characters in a string?",
        option: [".count", ".length", ".size", ".index"],
        answer: ".length"
    },
    {
        question: "What does DOM stand for?",
        option: ["Document Object Model", "Data Object Model", "Document Oriented Module", "Digital Object Manager"],
        answer: "Document Object Model"
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        option: ["onmouseover", "onclick", "onchange", "onhover"],
        answer: "onclick"
    },
    {
        question: "Which method removes whitespace from both ends of a string?",
        option: ["trim()", "strip()", "cut()", "remove()"],
        answer: "trim()"
    },
    {
        question: "Which method is used to join two or more arrays?",
        option: ["merge()", "join()", "concat()", "combine()"],
        answer: "concat()"
    },
    {
        question: "Which function is used to display an alert box?",
        option: ["alert()", "msg()", "popup()", "console.log()"],
        answer: "alert()"
    },
    {
        question: "Which object is the top of the JavaScript scope chain in browsers?",
        option: ["window", "document", "global", "this"],
        answer: "window"
    },
    {
        question: "Which keyword is used to handle errors?",
        option: ["try...catch", "error", "handle", "if...else"],
        answer: "try...catch"
    },
    {
        question: "Which loop is best for iterating over an array?",
        option: ["for", "while", "for...of", "do...while"],
        answer: "for...of"
    },
    {
        question: "Which loop is best for iterating object properties?",
        option: ["for...in", "for...of", "while", "forEach"],
        answer: "for...in"
    },
    {
        question: "Which function is used to delay execution in JavaScript?",
        option: ["setInterval()", "delay()", "setTimeout()", "wait()"],
        answer: "setTimeout()"
    },
    {
        question: "Which method executes a function repeatedly at given intervals?",
        option: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
        answer: "setInterval()"
    },
    {
        question: "What is the type of null in JavaScript?",
        option: ["null", "undefined", "object", "boolean"],
        answer: "object"
    },
    {
        question: "Which symbol is used for logical AND?",
        option: ["&&", "||", "!", "&"],
        answer: "&&"
    },
    {
        question: "Which symbol is used for logical OR?",
        option: ["&&", "||", "!", "|"],
        answer: "||"
    },
    {
        question: "Which symbol is used for logical NOT?",
        option: ["&&", "||", "!", "!!"],
        answer: "!"
    },
    {
        question: "Which function converts a value to a string?",
        option: ["String()", "toString()", "Both", "Convert()"],
        answer: "Both"
    },
    {
        question: "Which function converts a value to a number?",
        option: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which symbol is used for exponentiation?",
        option: ["^", "**", "exp()", "^^"],
        answer: "**"
    },
    {
        question: "Which method reverses an array?",
        option: ["reverse()", "invert()", "flip()", "turn()"],
        answer: "reverse()"
    },
    {
        question: "Which method sorts an array?",
        option: ["order()", "arrange()", "sort()", "align()"],
        answer: "sort()"
    },
    {
        question: "Which method finds the largest integer less than or equal to a number?",
        option: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
        answer: "Math.floor()"
    },
    {
        question: "Which method finds the smallest integer greater than or equal to a number?",
        option: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
        answer: "Math.ceil()"
    }
];

const finishBtn = document.getElementById("finishBtn");
const nextBtn = document.getElementById("nextBtn");
const questionNoH3 = document.querySelector("#questionNo")
const error =  document.getElementById("error")
let isAttempt =  false;
let isAttempt2 = true;
//audios
const correctAudio = new Audio("assets/correct.mp3");
const incorrectAudio = new Audio("assets/incorrect.mp3");
let questionSrial = 1
let marks = 0;
let questionNo = 0;
maths()
function maths() {
    questionNo = Math.floor(Math.random() * 50) + 1;
    console.log(questionNo)
}
nextBtn.addEventListener("click",() => {
    const allOption = document.querySelectorAll(".answer");
    maths()
    if (isAttempt) {
        questionSrial++;
        isAttempt = false
        isAttempt2 = true
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
    
    if(questionSrial == 12) {
        nextBtn.classList.add("disable");
        finishBtn.classList.remove("disable");
    }
    questionNoH3.textContent = `${questionSrial}/12`    
}
const ansDiv = document.querySelectorAll(".answer")
ansDiv.forEach((e) => {
    
      e.addEventListener("click", (e) => {
            isAttempt = true
            if (e.currentTarget.firstElementChild.textContent == data[questionNo - 1].answer && isAttempt2 == true) {
                e.currentTarget.classList.add("correct");
                marks++ 
                isAttempt2 = false
                console.log(marks)
                correctAudio.play();
                error.textContent = ""
                return
            } else if (e.currentTarget.firstElementChild.textContent !== data[questionNo - 1].answer && isAttempt2 == true) {
                e.currentTarget.classList.add("incorrect")
                isAttempt2 = false
                error.textContent = ""
                incorrectAudio.play();
                optionArry.forEach((e) => {
                    if (e.textContent == data[questionNo - 1].answer) {
                        e.parentElement.classList.add("correct")
                    }
                } )
            }
            console.log(isAttempt, " marks")
        })
})
const card = document.getElementById("card");
const overLay = document.getElementById("overLay");
const totalMarks = document.getElementById("totalMarks");
const progressbar = document.getElementById("progressbar");
finishBtn.addEventListener("click", () => {
    overLay.classList.add("overLayOpen")
    card.classList.add("openCard")
    totalMarks.textContent = `${marks}/12`
    let persent = (marks / 12) * 100;
    console.log(persent)
    document.getElementById("progressText").textContent = `${Math.round(persent)}%`;
    progressbar.style.width = `${persent}%`;
    correctAudio.play()
    
})
const tryagain = document.getElementById("try");
tryagain.addEventListener("click", ()=> {
    marks = 0
    questionSrial = 1
    persent = 0
    finishBtn.classList.add("disable")
    nextBtn.classList.remove("disable")
    startpage.classList.remove("disable")
    questionPage.classList.add("disable")
    overLay.classList.remove("overLayOpen")
    card.classList.remove("openCard")
    
    const allOption = document.querySelectorAll(".answer");
    allOption.forEach(option => {
        option.classList.remove("incorrect");
        option.classList.remove("correct");
    });
    isAttempt = false;
    isAttempt2 = true;
    error.textContent = "";
    ask ()

})

ask ()