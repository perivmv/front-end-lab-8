
function getClosestToZero(){
	var ClosestToZero = 0;
		for (i = 1; i < arguments.length; i++) {
			if (Math.abs(arguments[i]) < Math.abs(arguments[0])) {
				ClosestToZero = arguments[i];
			}
		}
    return ClosestToZero;
}
getClosestToZero(9, 5, -4, -9); 

