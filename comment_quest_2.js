const firstNumber = 10;
const secondNumber = 0;
const operator = '+';

let result; // 결과를 의미하는 변수를 미리 선언

switch (operator) {
    case '+': //operator === '+' 일 경우 첫번째 수와 두번째 수를 더해 결과값에 넣는다
        result = firstNumber + secondNumber;
        break; // switch-case 문을 빠져나감
    case '-': //operator === '-' 일 경우 첫번째 수에서 두번째 수를 빼 결과값에 넣는다
        result = firstNumber - secondNumber;
        break; 
    case '*': //operator === '*' 일 경우 첫번째 수와 두번째 수를 곱해 결과값에 넣는다
        result = firstNumber * secondNumber;
        break;
    case '/': //operator === '/' 일 경우 첫번째 수를 두번째 수로 나눠 결과값에 넣는다
        result = firstNumber / secondNumber;
        break;
        //TODO: secondNumber === 0 일 경우의 예외처리 필요
    default: // 입력받은 문자열이 어떠한 조건에도 맞지 않을 때 예외처리
        result = '유효하지 않은 연산자입니다.';
}

console.log(`결과: ${result}`); // 템플릿 리터럴