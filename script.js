var totalColors = 6;
var colors = generateRandomColor(totalColors);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var background = document.querySelector("h1");
var buttonall = document.querySelectorAll("button");

var button = buttonall[0];
var easyButton = buttonall[1];
var hardButton = buttonall[2];

resetColor();


easyButton.addEventListener("click", function(){
	totalColors = 3;
	colors = generateRandomColor(totalColors);
	pickedColor = pickColor();
	resetColor();
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	for(var i=3; i<6; i++)
		square[i].classList.remove("square");
});

hardButton.addEventListener("click", function(){
	totalColors = 6;
	colors = generateRandomColor(totalColors);
	pickedColor = pickColor();
	resetColor();
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	for(var i=3; i<6; i++)
		square[i].classList.add("square");
});

function resetColor(){
	button.textContent = "New Colors";
	background.style.background = "steelblue";
	for (var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.background = colors[i];
		}
		else
			square[i].classList.remove("square");

		square[i].addEventListener("click", function(){
			var rgb = this.style.background.slice(0, (this.style.background).indexOf(")") + 1);	// due to mozilla
			if(rgb == pickedColor){
				message.textContent = "Correct";
				chageColor(pickedColor);
				background.style.background = pickedColor;
				button.textContent = "Play Again?"
			}
			else{
				this.style.background = "#232323";
				message.textContent = "Try again";
			}
		});
	}
	document.querySelector("span").textContent = pickedColor;
	message.textContent = "";
}

function chageColor(color){
		for(var j=0; j<square.length; j++){
			square[j].style.background = color;
		}
}

function pickColor(){
	var colorIndex = Math.floor(Math.random() * colors.length);
	return colors[colorIndex];
}

function generateRandomColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
		var color = getRandomColor();
		arr.push(color);
	}
	return arr;
}

function getRandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var color = "rgb(" + r + ", " + g + ", " + b +")";
	return color;
}

button.addEventListener("click", function(){
	colors = generateRandomColor(totalColors);
	pickedColor = pickColor();
	resetColor();
});