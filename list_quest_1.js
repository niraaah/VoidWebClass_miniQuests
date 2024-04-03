let myList = [1, 2, 3, 4, 5]
let sum = 0

for(let i = 0; i < myList.length; i++){ // myList 길이만큼 실행
    sum += myList[i]
    console.log(`현재 합계: ${sum} (${myList[i]}를 더함)`)
}
console.log(`최종 합계: ${sum}`)