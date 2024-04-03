import readlineSyncModule from "readline-sync";

let isCorrect = false
const correctAnswer = "열심히 배워서 최고의 개발자가 되어보자!"
const answer = readlineSyncModule.question("문장 입력: ")

// 입력이 정답과 같을 때 isCorrect 플래그를 true로 변경
if (answer === correctAnswer){
    isCorrect = true
}

if (isCorrect == true){ // isCorrect 플래그가 true 일 때 "정답입니다." 출력
    console.log("정답입니다.")
} else{ // isCorrect 플래그가 false 일 때 "실패입니다." 출력
    console.log("실패입니다.")
}