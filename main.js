var currentPlayer;
var totalPlayers;
var currentState;
var chameleon;
var wordList;
var realWordIndex;
var selectedCategory;

function setup() {
	currentPlayer = 0;
	currentState = 0;
	document.getElementById("playerNum").innerHTML = currentPlayer;
	totalPlayers = prompt("Input The Number of Players:");
	totalPlayers = Number.isInteger(totalPlayers) ? totalPlayers : 4;
	
	chameleon = Math.floor(Math.random() * totalPlayers) + 1;
	var allWords = JSON.parse(document.getElementById("wordList").innerHTML);
	var allKeys = Object.keys(allWords);
	
	// Randomly select a key
	var categoryIndex = Math.floor(Math.random() * allKeys.length);
	
	// randomly select a word
	selectedCategory = allKeys[categoryIndex];
	document.getElementById("currentCategory").innerHTML = selectedCategory;
	wordList = allWords[selectedCategory];
	realWordIndex = Math.floor(Math.random() * wordList.length);
};

function getWord(playerNum) {
	var word = "blah blah";
	if(playerNum == chameleon) {
		word = "You Are The Chameleon! Try To Blend In!";
	}
	else {
		word = wordList[realWordIndex];
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
			document.getElementById("currentWord").innerHTML = "";
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