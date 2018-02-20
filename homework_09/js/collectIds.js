// reactivex.io
// Exercise 6 - filter
// June 28, 2016


// Use MakerSquare function filter to generate a new array containing movies with a ration of 5.

// a)  array of new releases
var movies = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": " http://bb-1/654356453",
			"uri": " http://bb-1/654356453",
			"rating": 2.7,
			"bookmark": []
			}, {
			"id": 654356453,
			"title": "Good Mood",
			"boxart": "http://bb-1",
			"uri": " http://bb-1/654356453",
			"rating": 3.5,
			"bookmark": [{time: 65876586}]
			}, {
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://ch-1",
			"uri": " http://ch-1/65432445",
			"rating": 3.0,
			"bookmark": []
			}, {
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://fr-1",
			"uri": " http://fr-1/675465",
			"rating": 4.0,
			"bookmark": [{time: 65876586}]

		}
] 


function forEach(collection, collect){
	
	if(Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++){
			collect(collection[i])			
		}
	} else {
		for (var key in collection){
			collect(collection[key])
		}
	}
}


function collectIds(collection, collect){	
	var newArray = []	
	forEach(collection, function(val){		
		if(collect(val)){
			newArray.push(val)
		}
	})
	return newArray
}



movies.filter(function(val){	
	return val.rating > 3	
})

