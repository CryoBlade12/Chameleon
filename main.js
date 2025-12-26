var currentPlayer;
var totalPlayers = 4;
var currentState;
var chameleon;

function setup() {
	currentPlayer = 0;
	currentState = 0;
	document.getElementById("playerNum").innerHTML = currentPlayer;
	chameleon = Math.floor(Math.random() * totalPlayers) + 1;
};

function getWord(playerNum) {
	var word = "blah blah";
	if(playerNum == chameleon) {
		//give out fake word
	}
	else {
		//give out real word
	}
	return word;
}

function buttonClick() {
	if(currentPlayer == 0) {
		currentPlayer = 1;
		document.getElementById("playerNum").innerHTML = currentPlayer;
		currentState = 1;
		document.getElementById("currentWord").innerHTML = getWord(currentPlayer);
		document.getElementById("actionButton").innerHTML = "Clear!";
	}
	else if(currentState == 1) {
		currentPlayer++;
		if (currentPlayer>totalPlayers) {
			document.getElementById("action").innerHTML = "";
		}
		else {
			document.getElementById("playerNum").innerHTML = currentPlayer;
			currentState = 0;
			document.getElementById("currentWord").innerHTML = "";
			document.getElementById("actionButton").innerHTML = "Start!";
		}
	}
	else {
		document.getElementById("playerNum").innerHTML = currentPlayer;
		currentState = 1;
		document.getElementById("currentWord").innerHTML = getWord(currentPlayer);
		document.getElementById("actionButton").innerHTML = "Clear!";
	}
};