var rootNode = document.getElementById("root");

function makeUL(structure) {
    // Create the list element:
  var list = document.createElement("ul");  

  for (var i = 0; i < structure.length; i++) {
        // Create the list item:
    var listItem = createListItem(structure[i], list);

    if (structure[i].folder) {

      if (structure[i].children) {
        var ul = makeUL(structure[i].children);
        listItem.appendChild(ul);  
      } else {
          var empty = document.createElement("p");
          empty.classList.add("empty");
          empty.innerHTML = "Folder is empty";
          list.appendChild(empty);
      };
    };
  };
  return list;
};
 // Create the list item:
function createListItem(element, parent) {
	var listItem = document.createElement("li");
	var div = document.createElement("div");
	var title = document.createElement("p");
	var icon = document.createElement("i");
	icon.className = "material-icons";
	title.innerHTML = element.title;
	div.className = "list-item";

	if (element.folder) {
		div.classList.add("folder");
		icon.innerHTML = "folder";
		listItem.classList.add("closed");
		listItem.addEventListener("click", openFolder, false);	
	} 
	else{
		listItem.classList.add("file");
		icon.innerHTML = "insert_drive_file";
		};
	div.appendChild(icon);
	div.appendChild(title);
	listItem.appendChild(div);
	parent.appendChild(listItem);  
	
	return listItem;
};
function openFolder(event) {
  event.stopPropagation();
  if (event.target.classList.contains("folder") || event.target.parentElement.classList.contains("folder")) {
    this.classList.toggle("closed");
    icon = this.children[0].children[0];
	icon.innerHTML = icon.innerHTML === "folder" ? "folder_open" : "folder";	
  };
};

var TreeView = makeUL(structure);
rootNode.appendChild(TreeView);