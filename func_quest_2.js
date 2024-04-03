import readlineSyncModule from "readline-sync";

const num1 = parseInt(readlineSyncModule.question("첫 번째 숫자: "), 10)
const operator = readlineSyncModule.question("연산자: ")
const num2 = parseInt(readlineSyncModule.question("두 번째 숫자: "), 10)

switch(operator){
    case '+':
        console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`)
        break
    case '-':
        console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`)
        break
    case '*':
        console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`)
        break
    case '/':
        if(num2 === 0){ // 두 번째 숫자가 0일때 예외처리
            console.log("0으로는 나눌 수 없습니다!")
            break
        }
        console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`)
        break
    default:
        console.log("잘못된 입력입니다!")
        break
}