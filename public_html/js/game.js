'use strict';

var dict = {
		"dummy": 0
	};

var WordList =
    [
        "JAR","MONKEY","REFERENCES","MACRO","UNZIP","MYSTIFY"
    ];
var HintList=
	[
		"This is an Object", "This is an Animal", "This is a Verb", "This is used in Excel Application","Decompress","Utterly bewilder or perplex"
	];
const maxTries = 9;         
var guessedLetters = [];        
var currentWordIndex;           
var guessingWord = [];          
var remainingGuesses = 0;      
var hasFinished = false;       
var wins = 0;                   
var tempscore=0;

function addUser(uname){
		dict[uname]=0;
	}

function showUsername(){
		document.getElementById("show-name").innerHTML = "Welcome "+window.location.search.substring(7);
		document.getElementById("show-name").style.fontSize = "35px" 
		document.getElementById("show-name").style.backgroundColor = "#5499C7";
		
	}
	

function resetGame() {
    remainingGuesses = maxTries;
    currentWordIndex = Math.floor(Math.random() * (WordList.length));
    guessedLetters = [];
    guessingWord = [];
    document.getElementById("hangmanImage").src = "";
    for (var i = 0; i < WordList[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }   
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";
	document.getElementById("uscore").style.cssText = "display: none";
	
    updateDisplay();
};

function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }
    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};

function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "images/" + (maxTries - remainingGuesses) + ".png";
};


function evaluateGuess(letter) {
    
    var positions = [];
    for (var i = 0; i < WordList[currentWordIndex].length; i++) {
        if(WordList[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
        updateHangmanImage();
    } else {
       
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        hasFinished = true;
		tempscore=(100-(maxTries-remainingGuesses)*10);
		document.getElementById("uscore").innerHTML= tempscore;
		document.getElementById("uscore").style.cssText = "display: block";

    }
};

function checkLoss()
{
    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
		hasFinished = true;
		alert("Answer: "+WordList[currentWordIndex]);
		tempscore=(100-(maxTries-remainingGuesses)*10);
		document.getElementById("uscore").innerHTML= tempscore;
		document.getElementById("uscore").style.cssText = "display: block";
    }
}

function giveHint(){
		document.getElementById("hint_sol").innerHTML = HintList[currentWordIndex];
		document.getElementById("hint_sol").style.cssText = "display: block";
	}
	
function takeHint(){
		document.getElementById("hint_sol").style.cssText = "display: none";
}

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
};

document.onkeydown = function(event) {
    if(hasFinished) {
        resetGame();	
        hasFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};