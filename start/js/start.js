const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
result.style.display = "none";
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  const resultName = document.querySelector(".resultName");
  console.log(infoList[point].name);
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.Animation = "fadeOut 1s";
  setTimeout(() => {

    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.Animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";//block == 켜줌 
    }, 450)
  });
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
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
      var target = qnaList[qIdx].a[idx].type;
      for (let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 500)

  }, false);
}


function goNext(qIdx) {
  //result 구현 
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  //질문&선택지 출력 
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  //상태바 진행상태 
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';

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

