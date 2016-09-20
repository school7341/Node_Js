//모듈 추출
var url=require('url');
//모듈 사용
var parsedObject = url.parse('http://www.naver.com/view/test.do?cp=test',true);
console.log(parsedObject);