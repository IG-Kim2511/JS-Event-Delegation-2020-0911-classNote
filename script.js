window.addEventListener("DOMContentLoaded", () => new IlbuniPointer());

// 1.
// addeventlistener이 너무 많으면 프로그램이 느려짐
// 그래서 부모element인 menu 에 이벤트 위임하는 해결

const btns = document.querySelectorAll(".menu-btn");

function clickBtnHandler() {
  console.log(this);
}

btns[0].addEventListener("click", clickBtnHandler);
btns[1].addEventListener("click", clickBtnHandler);
btns[2].addEventListener("click", clickBtnHandler);

// 2.menu / this
// 어느곳을 누르든 menu로 인식하는 문제

var menu = document.querySelectorAll(".menu");

function clickBtnHandler() {
  console.log(this);
}

menu.addEventListener("click", clickBtnHandler);

// 3.menu / event.currentTarget
// 어느곳을 누르든 menu로 인식하는 문제... this와 같음

var menu = document.querySelectorAll(".menu");

function clickBtnHandler(event) {
  console.log(event.currentTarget);
}

menu.addEventListener("click", clickBtnHandler);

// 4. target
// 버튼안의 이미지 눌르면 이미지가 출력이 됨

var menu = document.querySelectorAll(".menu");

function clickBtnHandler(event) {
  console.log(event.target);
}

menu.addEventListener("click", clickBtnHandler);

// final
//elem 을 event.target설정

//elem의 class 에 'menu-btn'class가 있는지 확인

//var menu = document.querySelector(".menu");

// 'menu-btn'이 없으면,  elem 을 그 elem의 parentNode로 설정
// ex.만약 img를 확인해봤다면,  이미지 상위의 버튼으로 elem으로 옮김

function clickHandler(event) {
  let elem = event.target;
  while (!elem.classList.contains("menu-btn")) {
    elem = elem.parentNode;

    // 버튼 밖의 body부분을 클릭한때 : error
    // body부분에 'menu-btn'클래스가 없으므로..

    // elem의 이름이 BODY 라면,
    // elem을 null 시키고,
    // 함수를 종료시킴

    if (elem.nodeName == "BODY") {
      elem = null;
      return;
    }
  }

  console.log(elem.dataset.value);
}

menu.addEventListener("click", clickHandler);

// final -2 .
// P:const html / innerHTML
// 윈도우 클릭한때 event
// html문서를 htmlStr 변수에 넣음
// menu에 htmlStr 텍스트 넣음.
// 모든 기능 그대로 구현됨

wondow.addEventListener("click", () => {
  const htmlStr = `
<div class="menu">
      <button class="menu-btn" data-value="1">
        <img class="icon" src="../images/ilbuni1.png" alt="" />
        <span class="btn-label">일분이 1</span>
      </button>
      <button class="menu-btn" data-value="2">
        <img class="icon" src="../images/ilbuni2.png" alt="" />
        <span class="btn-label">일분이 2</span>
      </button>
      <button class="menu-btn" data-value="3">
        <img class="icon" src="../images/ilbuni3.png" alt="" />
        <span class="btn-label">일분이 3</span>
      </button>
    </div>
`;

  menu.innerHTML = htmlStr;
});
