rootNode = document.getElementById("root");
document.body.style.backgroundColor = "#333";
	var thumbnails = document.createElement('div');
    thumbnails.className = "thumbnails";
    ul = document.createElement("ul");
	ul.appendChild(thumbnails);
		
		
function createlistTanks(tanks){
	
		var head_title = document.createElement("h1");
		head_title.classList.add("head_title");
		var title = document.createTextNode("Most popular tanks");
		head_title.appendChild(title);
		thumbnails.appendChild(head_title);
	
		tanks.forEach((tank) => {
		
			var listTanks = document.createElement("li");	
			ul.appendChild(listTanks);
			
			
			var p = document.createElement("p"),
			span = document.createElement("span");
				
			var preview = document.createElement("img");
			preview.classList.add("thumb");
			preview.id = "tankpreview ";
			preview.setAttribute("src", tank.preview);	
			listTanks.appendChild(preview);
			
			ul.id = "tankpreview";

			listTanks.className = "tanks";
			
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
				listTanks.appendChild(preview);	
				preview.title = "Click to details";	
				listTanks.appendChild(model);		
			
			ul.appendChild(listTanks);
					
			rootNode.appendChild(ul);
			listTanks.addEventListener("click", () => {
				location.hash = tank.model;
			});
		});
}

function TankDetail() {
    const div1 = document.getElementById("tankpreview");
    let tankhash = location.hash.slice(1);
    tanks.forEach(item => {
        if (item.model === tankhash) {
            createTankDetailTree(item);
        }
    });
    const backLink = document.getElementsByClassName('back');
    backLink[0].addEventListener('click', (e) => {
        location.hash = '';
        window.history.go();
    });
}

function createTankDetailTree(tank) {
    let div2 = document.getElementById("tankpreview"),
        newTree = document.createElement("div");
    newTree.className = "ditails";
    div = document.createElement("div");
    main = document.createElement("div");
    div.className = "header";
    p = document.createElement("p");
    h1 = document.createElement("h1");
    country_image = document.createElement("img");
    prevBlock = document.createElement("div");
    prevBlock.className = "left";
    preview = document.createElement("img");
    prevBlock.innerHTML = "<h2>Preview</h2>";
    span = document.createElement("span");
    country_image.setAttribute("src", tank.country_image);
    country_image.title = tank.country;
    preview.title = tank.model;
    preview.setAttribute("src", tank.preview);
    h1.textContent = " " + tank.model.toUpperCase() + " ";
    span.textContent = "(level " + tank.level + ")";
    main.className = "fulltank";
    div.appendChild(country_image);
    div.appendChild(h1);
    h1.appendChild(span);
    prevBlock.appendChild(preview);
    main.appendChild(prevBlock);

    let character = document.createElement("div");
    character.className = "right";
    character.innerHTML = "<h2>Characteristic</h2>";
    main.appendChild(character);

    let table = document.createElement("table");

		for (key in tank.details) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');
			td.className = "tdleft";
			td.innerHTML = key.replace(/_/g, ' ');
			let tdinfo = document.createElement('td');
			tdinfo.className = "tdright";
			tdinfo.innerHTML = tank.details[key];
			tr.appendChild(td);
			tr.appendChild(tdinfo);
			table.appendChild(tr);
		}
    character.appendChild(table);
    main.appendChild(character);

    backToList = document.createElement("a");
    backToList.className = "back";
    backToList.innerHTML = "Back to list view";
    backToList.href = "#";
    newTree.appendChild(div);
    newTree.appendChild(main);
    newTree.appendChild(backToList);
    rootNode.replaceChild(newTree, div2);

}
createlistTanks(tanks, rootNode);
window.onhashchange = TankDetail;
