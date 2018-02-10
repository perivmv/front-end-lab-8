
var euro = parseInt(prompt('Please, input amount of EURO'));
var usd = parseInt(prompt('Please, input amount of USD'));
var oneEuro = 33.2324;
var oneDollar = 27.1240;
	
	if (isNaN(euro) && isNaN(usd)){
		console.log("Incorrect data!");
	} 
	else {
		if (isNaN(euro)) euro = 0;
		if (isNaN(usd)) usd = 0;
		
		var Euro_Dollar = oneEuro / oneDollar;
		var EuroUAN = euro * oneEuro;
		var UsdUAN = usd * oneDollar;

		console.log(euro + ' euros are equal ' + EuroUAN.toFixed(2) + ' UAH, ' + usd +  ' dollars are equal ' + UsdUAN.toFixed(2) + ' UAH, ' + 'one euro is equal ' + Euro_Dollar.toFixed(3) + ' dollars.');
	}