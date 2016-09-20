//모듈 추출
var crypto=require('crypto');
//해쉬 생성
var shasum = crypto.createHash('sha1');
shasum.update('Seokhyeon Seo');//변경하고자하는 문자열
var output=shasum.digest('hex');
//출력
console.log("SeoS' Name_hash : ", output);