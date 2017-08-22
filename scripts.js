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



// Creates an array of color values to save a painting.
	var savePainting = function(){
		var boxColors =[];
		for (var i = 0; i < rows.length; i++){
			// if (rows[i].style.backgroundColor == ""){
			// 	boxColors.push("white");
			// } {
				boxColors.push(rows[i].style.backgroundColor);
		}
		var data = "?saveArt=" + JSON.stringify(boxColors);
		window.history.replaceState(null, null, "/" + data);

		// saveToFile(boxColors)
		return boxColors;
	}
	// function saveToFile(colorCode) {
	// 	var data = JSON.stringify(colorCode);
	// 	$.post('/save', data);
	// 	debugger;
	// 	return
	// }


// function submitSave() {
//   var saveField = document.getElementById("save_button").submit();
//   	saveField.text = savep
// }





// post('/contact/', {name: 'Johnny Bravo'});
// 	poke1 = Net::HTTP.post('localhost:8080', '/sa) 


//Save button
	var save = document.getElementById("save_button");
	save.addEventListener("click", savePainting)
	event.preventDefault();


});

