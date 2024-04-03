let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0

for(let i = 0; i < myList.length; i++){
    if(myList[i] % 2 === 0){
        console.log(`짝수 발견: ${myList[i]}`)
        sum += myList[i]
    }
}
console.log(`짝수 합계: ${sum}`)