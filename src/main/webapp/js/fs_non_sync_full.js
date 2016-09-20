//모듈 추출
var fs=require('fs');
//비동기식-FileRead

fs.readFile('textfile.txt','utf8',function(error,data){
	if(error){
		console.log(error);
	} else {
		console.log(data);
	}
});

//비동기식-FileWrite
fs.writeFile('textfile.txt','Wow, another method!!!','utf8', function(error){
if(error){
	console.log(error);
} else {
	console.log("Write File Non-Sync Complete.");
}
});