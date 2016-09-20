console.log('Hello Node Js..!!');
console.log('%d+%d=%d',243,52,273+52);
console.log('%d+%d=%d',243,52,273+52,52273);
console.log('%d+%d=%d & %d',243,52,273+52);
console.log('숫자 : %d+%d=%d',243,52,273+52);
console.log('문자열 : %s','Hello Node Js..!!','그냥 특수 기호와 관계 없음!!!');
console.log('JSON : %j',{name : 'Seokhyeon Seo'},{phone : '010-9949-7341'},{addr_basic : '서울시 강동구 성내동'});
//시간 측정 시작
console.time('alpha');
var output =1;
for (var i=1; i<=10;i++ )
{
	output *=i;
}
console.log('Result:',output);
//시간 측정 종료
console.timeEnd('alpha');
//출력 글자에 색 적용
console.log('\u001b[31m','Change Color~');
console.log('\u001b[32m','Change Color~');
console.log('\u001b[33m','Change Color~');
console.log('\u001b[34m','Change Color~');
console.log('\u001b[35m','Change Color~');
console.log('\u001b[36m','Change Color~');
console.log('\u001b[1m');//화면 밝게
console.log('\u001b[30m');//검정 글씨
console.log('\u001b[31m','Change Color~');//빨간색 글씨
console.log('\u001b[32m','Change Color~');//초록색 글씨
console.log('\u001b[33m','Change Color~');//노란색 글씨
console.log('\u001b[34m','Change Color~');//파란색 글씨
console.log('\u001b[35m','Change Color~');//분홍색 글씨
console.log('\u001b[36m','Change Color~');//하늘색 글씨
console.log('\u001b[37m','Change Color~');//하얀색 글씨
console.log('\u001b[0m');//초기화

//process.argv
process.argv.forEach(function(item, index){
//출력합니다.
	console.log(index+':'+typeof (item) + ':',item);
		//실행 매개변수에 --exit가 있을 때
		if(item =='--exit'){
		//다음 실행 매개변수를 얻습니다.
		var exitTime=Number(process.argv[index+1]);
		//일정 시간 이후 프로그램을 종료합니다.
		setTimeout(function(){
			process.exit();//매개변수 전달
		},exitTime);
	
	}
});

/*
console.log('-process.env:',process.env);
console.log('-process.version:',process.version);
console.log('-process.versions:',process.versions);
console.log('-process.arch:',process.arch);
console.log('-process.platform:',process.platform);
console.log('-process.memoryUsage():',process.memoryUsage());
console.log('-process.uptime():',process.uptime());
*/