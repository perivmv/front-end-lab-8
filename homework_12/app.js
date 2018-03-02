
document.body.style.backgroundColor = "#333";
 
 var rootNode = document.getElementById("root");
 

/***head_title*/
var head_title = document.createElement("h1");
head_title.classList.add("head_title");
var title = document.createTextNode("Most popular tanks");
head_title.appendChild(title);
var element = document.getElementById("root");
element.appendChild(head_title);
/***head_title*/



    var ul = document.createElement("ul");
    ul.classList.add("thumbnails");
	

    for (var i = 0; i < tanks.length; i++) {
        createlistTanks(tanks[i], "page"+(i+1));
        tanks[i].id = i;
    }
	
    function createlistTanks(tank, tankId){
        var listTanks = document.createElement("li");
		listTanks.setAttribute("Id", tankId);		
        ul.appendChild(listTanks);		
		
        var urlTank = document.createElement('a');
        urlTank.setAttribute('href', "#"+tankId);
        listTanks.appendChild(urlTank);
		
        
        var preview = document.createElement("img");
		preview.classList.add("thumb");
        preview.setAttribute("src", tank.preview);
		

        var model = document.createElement("div");
			model.classList.add("tank");
				var country_image = document.createElement("img");
				country_image.setAttribute("src", tank.country_image);
				model.appendChild(country_image);
				
				
					var level = document.createElement("span");
					model.appendChild(level);
					var textNode = document.createTextNode(tank.level);
					level.appendChild(textNode);
				
				var textNode = document.createTextNode(`${tank.model}`);
       
		model.appendChild(textNode);
        urlTank.appendChild(preview);		
        urlTank.appendChild(model);		
		listTanks.appendChild(urlTank);
        ul.appendChild(listTanks);
    }
	
	
	
	
	
	
	
	
	
    console.log(ul);
    root.appendChild(ul);