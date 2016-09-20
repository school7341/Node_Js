//모듈 추출
var crypto=require('crypto');
//변수 선언
var key='Nobody know my pw';//키 값
var input = '1234';//암호
//암호화
var cipher = crypto.createCipher('aes192',key);
cipher.update(input,'utf8','base64');
var cipheredOutput = cipher.final('base64');
//암호화 해제
var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipheredOutput,'base64','utf8');
var decipheredOutput = decipher.final('utf8');
//출력
console.log('Original PW : '+ input);
console.log('Cryptism PW : '+ cipheredOutput);
console.log('DeCryptism PW : '+ decipheredOutput);
