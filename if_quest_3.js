import readlineSyncModule from "readline-sync";

// 문자열을 입력받아 숫자로 변환
const userSelect = parseInt(readlineSyncModule.question("1. 작성 2. 조회 3. 수정 4. 삭제 5. 추가기능 6. 종료 >>"), 10);

switch (userSelect){
    case 1: // 입력이 1일 경우 "작성"을 출력
        console.log("작성")
        break // switch-case 문에서 탈출
    case 2: // 입력이 2일 경우 "조회"를 출력
        console.log("조회")
        break
    case 3: // 입력이 3일 경우 "수정"을 출력
        console.log("수정")
        break
    case 4: // 입력이 4일 경우 "삭제"를 출력
        console.log("삭제")
        break
    case 5: // 입력이 5일 경우 "추가기능"을 출력
        console.log("추가기능")
        break
    case 6: // 입력이 6일 경우 "종료"를 출력
        console.log("종료")
        break
    default: //1~6 사이의 정수가 입력되지 않았을 때의 예외처리
        console.log("올바른 입력이 아닙니다!")
        break
}