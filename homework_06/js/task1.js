	var a = parseFloat(prompt('Length of the 1st side:'));
	var b = parseFloat(prompt('Length of the 2nd side:'));
	var c = parseFloat(prompt('Length of the 3rd side:'));

	if ((a <= 0) || (b <= 0) || (c <= 0) || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Incorrect data!");
	} 
	
	else {
		var ab = a + b;
		var ac = a + c;
		var bc = b + c;
		if ((ab > c) && (ac > b) && (bc > a)) {
			var aa = a * a;
			var bb = b * b;
			var cc = c * c;
			var a2b2 = aa + bb;
			var a2c2 = aa + cc;
			var b2c2 = bb + cc;
			var p = (a + b + c) / 2;
			var area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
			var area = Math.round(area * 100) / 100;
			var type = 'Type of triangle is ';
			
			if ((aa == b2c2) || (bb == a2c2) || (cc == a2b2)) {
				console.log(type + 'right triangle and the square is' + ' ' + area);
			}
			
			else if (a == b && a == c && b == c) {
				console.log(type + 'equilateral and the square is' + ' ' + area);
			}			
			
			else if (a == b && a != c || a == c && a != b || b == c && b != a) {
				console.log(type + 'isosceles and the square is' + ' ' + area );
			}  
			
			else  {
				console.log(type + 'scalene and the square is' + ' ' + area);
			}
		
		} 
		else {
			console.log("Incorrect data!");
		}
	}
