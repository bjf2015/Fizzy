// answer to Fizz Buzz
var userInput = (prompt('Please enter a number!'));
	while (userInput % 1 != 0) {
		userInput = (prompt('Please do not enter a decimal point'));
	}
	for (var numberCount = 1; numberCount <=userInput; numberCount++) {
		if (numberCount % 5 === 0 && numberCount % 3 === 0){
			document.write('FizzBuzz');
			document.write('<br/>');
		} else if (numberCount % 5 === 0) {
			document.write('Buzz');
			document.write('<br/>');
		} else if (numberCount % 3 === 0){
			document.write('Fizz');
			document.write('<br/>');
		} else {
			document.write(numberCount);
			document.write('<br/>');
	};
}
