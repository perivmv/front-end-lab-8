function getFilteredArray(array, predicateFunction) {
	var filteredAarray = [];	
	forEach(array, function(item, index){		
		if (predicateFunction(item)){
			filteredAarray.push(item);
			}	
	});	
   return filteredAarray;   
}


function predicateFunction(num) { 
	return num > 3;
}
getFilteredArray([1, 7, 20], predicateFunction); 
