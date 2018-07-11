function chngeColor(className) {
	var colors = ["#00ff00", "#0000ff", "#ffffff", "#ff8000", "#ff0080", "#00ffff", "#000000"]; 
	var randomColor = colors[Math.floor(Math.random() * colors.length)];

    var elemArray = document.getElementsByClassName(className);
	
    for(var i = 0; i < elemArray.length; i++){
        elemArray[i].style.color = randomColor;
    }
}

setInterval(function(){
    chngeColor('change-color');
},4000);