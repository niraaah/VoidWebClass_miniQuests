import readlineSyncModule from "readline-sync";

const hour = parseInt(readlineSyncModule.question("시간을 입력하세요: "), 10);
if (hour >= 7 && hour <= 9 ){ 
    // hour가 7시에서 9시 사이일 경우 "아침 식사 시간" 출력
    console.log("아침 식사 시간")
} else if (hour >= 12 && hour <= 14){
    // hour가 12시에서 14시 사이일 경우 "점심 식사 시간" 출력
    console.log("점심 식사 시간")
} else if (hour >= 18 && hour <= 20){
    // hour가 18시에서 20시 사이일 경우 "저녁 식사 시간" 출력
    console.log("저녁 식사 시간")
} else{ // hour가 어느 조건에도 맞지 않을 때
    console.log("식사 금지")
}