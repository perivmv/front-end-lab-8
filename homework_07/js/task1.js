var N = Number(prompt('Please enter natural number N (0<N<=20) '));
 
if((N <= 0) || (N > 20) || isNaN(N)|| !Number.isInteger(N)){   
   console.error("Incorrect!");	
}	
else {
	for (var i = 1; i <= N; i++) {
		var str = '';
		for (var j = 0; j < N-i; j++) {
		  str = str + '   ';
		}
		for (var k = 1; k <= (2*i-1); k++) {
		  str = str + '[~]';
		}
	console.log(str + "\n");
	}	  
}