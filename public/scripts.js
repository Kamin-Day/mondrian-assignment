window.addEventListener("load", function(){
// Current color to paint with
	var curColor;
// Sets Paint color	
    var setColor = function(event){
		curColor = event.target.id;
	}
// Paints an object
	var paint = function(event){
		event.target.style.backgroundColor = curColor;
	}
// Calls a function to set your current color if a color on the pallet is clicked
	var colors = document.getElementsByClassName("color");
    for (var e = 0; e < colors.length; e++){
        colors[e].addEventListener("click", setColor)
    }
// Calls a function to paint a box on the canvas when a box is clicked
    var rows = document.getElementsByClassName("row");
    for (var e = 0; e < rows.length; e++){
        rows[e].addEventListener("click", paint)
    }
//Save button
	var saveButton = document.getElementById("save_button");
	saveButton.addEventListener("click", function(){
		event.preventDefault();
		savePainting(event);
	});

	var loadButton = document.getElementById("load");
	loadButton.addEventListener("click", function(){


		event.preventDefault();
		var currentSelection = document.getElementsByTagName("form")[0].childNodes[1];
		var chosenSelection = currentSelection.options[currentSelection.selectedIndex].text;
					
		var request = new XMLHttpRequest();
		request.open("POST", "/load_painting?loadArt=" + chosenSelection);
		request.send()
	
		request.addEventListener("load", refillCanvas)
	});

	var refillCanvas = function(event){
		var request = event.target; 
		alert(request.response);


		var testcolors = "wwwwyyywbbwwwwww";
		for (var e = 0; e <rows.length; e++){
			if (request.response.charAt(e) == "w"){
				rows[e].style.backgroundColor = "white"
			} else if (request.response.charAt(e) == "y"){
				rows[e].style.backgroundColor = "yellow"
			} else if (request.response.charAt(e) == "r"){
				rows[e].style.backgroundColor = "red"
			} else if (request.response.charAt(e) == "b"){
				rows[e].style.backgroundColor = "blue"
			}
		}
		
	}



// Creates an array of color values to save a painting.
	var savePainting = function(event){
		var boxColors = "";
		for (var i = 0; i < rows.length; i++){
			if (rows[i].style.backgroundColor.charAt(0) == ""){
				boxColors += "w"
			} else {
				boxColors += rows[i].style.backgroundColor.charAt(0);
			}
		}
		var data = "?saveArt=" + boxColors;
		// window.history.replaceState(null, null, "/" + data);
		var request = new XMLHttpRequest();
		request.open("POST", "/save_painting" + data);
		request.send()
		request.addEventListener("load", alert_Save_Success)

		// saveToFile(boxColors)
		//return boxColors;
	}



	var alert_Save_Success = function(event){
		alert("Good job! Your masterpiece has been preserved.");
		var request = event.target; 
		
	}

});



// // Creates an array of color values to save a painting.
// 	var savePainting = function(event){
// 		var boxColors = "";
// 		for (var i = 0; i < rows.length; i++){
		
// 				boxColors.push(rows[i].style.backgroundColor);
// 		}
// 		var data = "?saveArt=" + JSON.stringify(boxColors);
// 		// window.history.replaceState(null, null, "/" + data);
// 		var request = new XMLHttpRequest();
// 		request.open("POST", "/save_painting" + data);
// 		request.send()
// 		request.addEventListener("load", alert_Save_Success)

// 		// saveToFile(boxColors)
// 		//return boxColors;
// 	}








// ====================================================================================
// I WANT TO push the button, and tell the sinatra server i want to save.
// i will create a string of params and then send them to the address of the controller. 
// the controller will take this string and then save it to the file.
// ====================================================================================


	// function saveToFile(colorCode) {
	// 	var data = JSON.stringify(colorCode);
	// 	$.post('/save', data);
	// 	debugger;
	// 	return
	// 	



	// var testSave = "http://localhost:4567/?saveArt=[%22blue%22,%22yellow%22,%22red%22,%22blue%22,%22blue%22,%22yellow%22,%22red%22,%22blue%22,%22blue%22,%22yellow%22,%22red%22,%22blue%22,%22blue%22,%22yellow%22,%22red%22,%22blue%22]#";
	// var translatedFile = testSave.substring(test.indexOf("[");
	// 	debugger;



// function submitSave() {
//   var saveField = document.getElementById("save_button").submit();
//   	saveField.text = savep
// }





// post('/contact/', {name: 'Johnny Bravo'});
// 	poke1 = Net::HTTP.post('localhost:8080', '/sa) 


