function reverseNumber(number) {
	var reverse = 0;
		while (number != 0) {
			reverse *= 10;
			reverse += number % 10;
			number -= number % 10;
			number /= 10;
		}
	return reverse;
}

reverseNumber(123); 
//reverseNumber(-456); 
//reverseNumber(1000);
