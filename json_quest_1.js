import fileSystem from 'fs';
import readlineSyncModule from 'readline-sync';

const jsonString = '{"name": "niraaah", "age": 25, "email": "meer@kakao.com", "cell":"010-1234-5678"}'
const file = "myInfo.json"
fileSystem.writeFileSync(file, jsonString, 'utf8');
console.log(`${file} 파일이 생성되었습니다.`)
const answer = readlineSyncModule.question(`${file} 파일을 삭제하시겠습니까? (y/n): `)
if (answer === "y" || answer === "Y"){
    fileSystem.unlinkSync(file);
    console.log(`${file} 파일이 삭제되었습니다.`)
}else{
    console.log(`${file} 파일이 삭제되지 않았습니다.`)
}