//모듈 추출
var os=require('os');
//모듈 사용
console.log(os.hostname());//운영체제 호스트 이름
console.log(os.type());//운영체제 이름
console.log(os.platform());//플랫폼
console.log(os.arch());//아키텍처
console.log(os.release());//버전
console.log(os.uptime());//실행된 시간
console.log(os.loadavg());//로드 에버리지 정보 담은 배열
console.log(os.totalmem());//시스템 총 메모리
console.log(os.freemem());//시스템 사용 메모리
console.log(os.cpus());//CPU 정보 담은 객체
console.log(os.getNetworkInterfaces());//네트워크인터페이스 정보 담은 배열