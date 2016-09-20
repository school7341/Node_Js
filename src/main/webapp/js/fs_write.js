//모듈 추출
var fs=require('fs');
//변수 선언
var data = 'Hello Node Js...!!';
//모듈 사용
//동기식
var text=fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf8');
console.log("Write File Sync Complete.");
//비동기식
fs.writeFile('TextFileOtherWrite.txt',data,'utf8', function(error){
console.log("Write File Non-Sync Complete.");
});