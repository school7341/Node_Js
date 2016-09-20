//모듈 추출
var url=require('url');
var querystring=require('querystring');
//모듈 사용
var parsedObject = url.parse('http://www.naver.com?cp=TEST');
console.log(querystring.parse(parsedObject.query));