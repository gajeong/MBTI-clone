const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function goNext() {
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[0].q;
  
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
    goNext();
  }, 450);
}

