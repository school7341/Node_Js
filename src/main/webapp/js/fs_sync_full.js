//모듈 추출
var fs=require('fs');
//모듈 사용-FileRead
try{
	var text=fs.readFileSync('textfile.txt','utf8');
	console.log(text);
} catch(e) {
	console.log(e);
}
//모듈 사용-FileWrite
try{
	var text=fs.writeFileSync('textfile.txt','Input Text Here.','utf8');
	console.log("Write File Sync Complete.");
} catch(e) {
	console.log(e);
}