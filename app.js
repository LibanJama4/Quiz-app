let questions = [
  {
    question: "Gormee soomaaliya xornimadda qaadatay?",
    answers: [1959, 1940, 1990, 1960, 3],
  },
  {
    question: "waa kuma wadanka kowaad ee ugu xeebta dheer bariga afrika?",
    answers: ["Ethopia", "Somalia", "Jabuti", "Sudan", 1],
  },
  {
    question: "waa kuma madaxweynihii ugu horeyey somaaliya?",
    answers: ["Farmaajo", "Hassan sheikh", "Adan cadde", "sharmaake", 2],
  },
  {
    question: "waa imisa tirada wabiyada mara somaaliya?",
    answers: [2, 5, 3, 0, 2],
  },
  {
    question: "magaalada madaxda Soomaaliya waa :",
    answers: ["Garawe", "Muqdisho", "Galkacyo", "Kismaayo", 1],
  },
  {
    question: "Waa imisa tirada gobolada somaaliya?",
    answers: [10, 20, 30, 18, 3],
  },
  {
    question: "Gormee somtac la aasaasay?",
    answers: [2018, 2022, 2020, 2000, 0],
  },
];

// selectors
let ScoreElement = document.querySelector(".score"),
  QuestionCard = document.querySelector(".question"),
  answerCard = document.querySelector(".answer-card"),
  btn = document.querySelector(".btn"),
  QuestionNumber = document.querySelector("#questions");

QuestionNumber.innerHTML = questions.length;

let score = JSON.parse(localStorage.getItem("score") || "0"),
  CurentQuestion = JSON.parse(localStorage.getItem("curentQuestion") || "0");
ScoreElement.innerHTML = score;

function GetQuestion() {
  if (CurentQuestion <= questions.length - 1) {
    QuestionCard.innerHTML = questions[CurentQuestion].question;
    let options = questions[CurentQuestion].answers;
  
  
    let answer = "";
    for (let index = 0; index < options.length - 1; index++) {
      answer += `
        <input type="radio" name="boxes" class="checkboxes" value="${
          index == options[options.length - 1] ? "corected" : "incorected"
        }" id="box${index}"> <label class="answer" for="box${index}">${
        options[index]
      }</label>
        `;
    }
    console.log(answer);

    answerCard.innerHTML = answer;
  }else{
    QuestionCard.innerHTML =  `
    <p>Waxaad Keentay intaas ${score}</p>
    <button onclick="Start()">PLay Again</button>

    `
  }
}
function Start(){
  localStorage.removeItem('score')
  localStorage.removeItem('curentQuestion')
}

GetQuestion();

btn.addEventListener("click", () => {
  let selected = document.querySelector('input[type="radio"]:checked');
  if (selected) {
    if (selected.value == "corected") {
      score = score + 10;

      localStorage.setItem("score", JSON.stringify(score));
      ScoreElement.innerHTML = score;
    }
    if (questions.length) {
      ++CurentQuestion;
      localStorage.setItem("curentQuestion", JSON.stringify(CurentQuestion));
      GetQuestion();
    }
  } else {
    alert("please choose Answer");
  }
});
