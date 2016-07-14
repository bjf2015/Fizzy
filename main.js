// answer to Fizz Buzz
var numberCount = 1
for (var numberCount = 1; numberCount <100; numberCount++) {
	if (numberCount % 5 === 0 && numberCount % 3 === 0){
		console.log('FizzBuzz')
	} else if (numberCount % 5 === 0) {
		console.log('Buzz');
	} else if (numberCount % 3 === 0){
		console.log('Fizz');
	} else {
		console.log(numberCount);
	}	
}
