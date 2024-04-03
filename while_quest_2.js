for (let i = 1; i <= 5; i++){
    let blank = "" // blank 문자열 초기화
    let star = "" // star 문자열 초기화
    
    // ' '을 5, 4, 3, 2, 1개 출력할 수 있도록
    for(let j = 5 - i; j >= 0; j--){
        blank += " "
    }
    // '*'을 1, 3, 5, 7, 9개 출력할 수 있도록
    for(let k = 0; k < 2 * i - 1; k++){
        star += "*"
    }

    // " "로 이루어진 문자열과 "*"로 이루어진 문자열을 더해서 출력
    console.log(blank + star)
}