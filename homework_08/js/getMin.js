function getMin(){
	var min = arguments[0];
	for (var i = 0, j = arguments.length; i < j; ++i)
		{
			var arg = arguments[i];
			if (min === null || min > arg) min = arg;
		}
	return min;
}