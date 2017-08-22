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
	var save = document.getElementById("save_button")[0];
	save.addEventListener("click", savePainting)
	event.preventDefault();


// Creates an array of color values to save a painting.
	var savePainting = function(){
		var boxColors =[];
		for (var i = 0; i < rows.length; i++){
		
				boxColors.push(rows[i].style.backgroundColor);
		}
		var data = "?saveArt=" + JSON.stringify(boxColors);
		window.history.replaceState(null, null, "/" + data);


		var request = new XMLHttpRequest();
		request.open("GET", "/save_painting"); // + JSON.stringify(boxColors));

		request.send()
		debugger;
		request.addEventListener("load", alert_Save_Success)

		// // saveToFile(boxColors)
		// return boxColors;
	}
	var alert_Save_Success = function(event){
		alert("Good job");
		var request = event.target; 
		alert(request.response);
	}

});
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


