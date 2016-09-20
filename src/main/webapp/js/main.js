//생성한 모듈을 추출-require()
var module = require('./module.js');
//모듈을 사용
console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));