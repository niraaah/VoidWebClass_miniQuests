import readlineSyncModule from "readline-sync";

const number = parseInt(readlineSyncModule.question("숫자 입력: "), 10)
let i = 1

if (number < 2){ // 2 미만의 수를 입력받았을 때 예외처리
    console.log("2 이상의 숫자를 입력하세요.")
}else{ // 2 이상의 수를 입력받았을 때
    while (true){
        if(i > 9){ // i = 9 일때까지만 실행되게 함
            break
        }
        console.log(`${number} * ${i} = ${number * i}`)
        i++
    }
}