const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText, qIdx) {
  var a = document.querySelector('.aBox');
  //createElement 
  var answer = document.createElement('button');
  answer.classList.add('fadeIn');
  //classList.add : answer에 answerList라는 클래스 이름을 부여 
  answer.classList.add('answerList');
  answer.innerHTML = answerText;

  a.appendChild(answer);

  //addEventListener, querySelectorAll
  answer.addEventListener("click", function () {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;

      children[i].classList.add('fadeOut');

    }
    setTimeout(() => {
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 500)

  }, false);
}

function goNext(qIdx) {
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }

}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.Animation = "fadeOut 1s";
  setTimeout(() => {

    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.Animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";//block == 켜줌 
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

