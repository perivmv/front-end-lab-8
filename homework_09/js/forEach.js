function forEach(array, func) {
	var index;
	var newarray=[];
	for (index = 0; index < array.length; ++index) {
          newarray.push(func(array[index]));
      }
      return newarray;
}
forEach([3, 5, 2], function(el) { 
console.log(el);
})
