// Letters A-Z array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


//Computer random letter pick
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// User guesses
var updateGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
};

// Computer Guesses
var updateLettersToGuess = function() {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

// Show the users guess
var updateGuessedLetters = function() {
	document.querySelector('#guessedLetters').innerHTML = 'Your guesses: ' + guessedLetters.join(', ');
};


//Reset Function
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateLettersToGuess();
	updateGuessesLeft();
	updateGuessedLetters();
}

updateLettersToGuess();
updateGuessedLetters();

// .onkeyup instructions

document.onkeyup = function(event) {
		guessesLeft--;
		var userGuess = String.fromCharCode(event.which).toLowerCase();


	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuessedLetters();

		if (userGuess === letterToGuess){
			wins++;
			document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
			// displayWinsPsychic();
			reset();
		}

		else if (guessesLeft == 0) {
			losses++;
			document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
			// displaylosePsychich();	
			reset();
	}
	
}

