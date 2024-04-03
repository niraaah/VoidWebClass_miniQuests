import readlineSyncModule from "readline-sync";

const operator = readlineSyncModule.question("+ - * / 입력: ")
switch (operator){
    case '+': // operator === '+'일 경우 "더하기" 출력
        console.log("더하기")
        break
    case '-': // operator === '-'일 경우 "빼기" 출력
        console.log("빼기")
        break
    case '*': // operator === '*'일 경우 "곱하기" 출력
        console.log("곱하기")
        break
    case '/': // operator === '/'일 경우 "나누기" 출력
        console.log("나누기")
        break
    default: // 연산기호가 아닌 문자열을 입력받았을 때 예외처리
        console.log("연산기호가 아님")
        break
}