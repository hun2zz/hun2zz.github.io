import answerValueObject from "./app.js";
import clickBoxBox from "./click.js";
// import clickBoxBox from "./click.js";
import { execute, executingValueObject } from "./clickRandomCom.js";
import { timeObject, TIMER, timerend } from "./timerlength.js";

/*
 pc로 출력해준 숫자와 사용자가 클릭한 박스가 정답 값(e.target) 맞는지 검증
 사용자가 클릭한 값이 틀리면 게임 종료 후 게임오버 이미지 출력(css 참고)
 사용자 선택 값 = 블록마다 id 부여, 일치여부(true, false) 판단
 클릭이벤트 발생할 때마다 사용자가 누른 블록 id 값 === pc 선택 값
 */

// =============================전역 변수 정의 영역========================//
let stageIndex = 1;
let userSequence = []; // 사용자가 입력한 순서를 저장하는 배열
// ==============================함수 정의 영역===========================//

const $boxWrapper = document.querySelector(".box-wrapper");
const $modalLayout = document.querySelector(".modal-layout");

function clickBox() {
  setTimeout(() => {
    executingValueObject.isExecuting = true;
  }, 0);
  $boxWrapper.onclick = (e) => {
    if (!e.target.matches(".box-wrapper .box")) return;

    if (!executingValueObject.isExecuting) return;

    clickBoxBox();
    const dataId = +e.target.dataset.id;
    userSequence.push(dataId);
    // console.log(userSequence);
    verifyAnswer();
  };
}

function verifyAnswer() {
  // 실행 종료 후 상태 변경
  // 사용자가 클릭한 박스가 정답이 아닌 경우
  for (let i = 0; i < userSequence.length; i++) {
    if (randomArray[i] !== userSequence[i]) {
      document.querySelector(".modal-layout").classList.add("show");
      userSequence = [];
      clearInterval(timerend);
      break;
    }
  }

  // 스코어 조작을 위한 변수 생성
  const $score = document.querySelector(".get-point");
  const $modalScore = document.getElementById("modal-score");
  if (userSequence.length === randomArray.length) {
    userSequence = [];
    clearInterval(timerend);
    timeObject.sec = 0;
    setTimeout(() => {
      timeObject.sec = +3 * randomArray.length;
    }, 0);
    answerValueObject.answerValue++;
    executingValueObject.isExecuting = false;
    // stageIndex++ 직전에 스코어 설정
    $score.textContent = stageIndex * 10;
    $modalScore.textContent = $score.textContent; // 모달에도 스코어 설정
    stageIndex++;
    let timer = 4;
    document.querySelector(".stage-output-box > strong").innerHTML =
      randomArray.length + 1;
    const timerRound = setInterval(() => {
      timer--;
      if (timer === 0) {
        timer = 3;
        clearInterval(timerRound);
      }
      document.querySelector(
        ".stage-timer"
      ).innerHTML = `${timer} 초 후 게임이 자동 시작됩니다.`;
    }, 1000);
    document.querySelector(".stage-layout").classList.add("stageshow");
    // execute 함수가 완료된 후에 verifyAnswer 함수를 호출하기 위해 setTimeout 사용
    setTimeout(() => {
      execute();
    }, 4000);
  }
}

import { randomMath, randomArray } from "./randomValue.js";
export { clickBox, verifyAnswer, $boxWrapper, $modalLayout, userSequence };
