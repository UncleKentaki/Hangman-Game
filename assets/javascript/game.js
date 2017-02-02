document.onkeyup = function(event) {

	var words = ["Schwifty","Blitz and Chitz", "Tiny Rick"];

	var userChoice = event.key.toLowerCase();

	var randNumber = Math.floor(Math.random() * words.length);

	var guessesRemaining = 5;

	//store word selection as variable
	var wordSelection = words[randNumber];
	console.log(wordSelection);

	//loop over every letter in the word and create a new element
	//for each letter and append )that element to letter space

	renderWordHint = function() {
		// number of letters in word is... word.length
		for (i=0;i<wordSelection.length;i++){

			var newElement = document.createElement("li");
			newElement.innerHTML = " _ ";
			document.getElementById("letterSpace").appendChild(newElement);

		}
	}
	

	//loop over every letter in word and check if userChoice matches
	//if it does, insert letter into corresponding <li> item
	//if it doesn't, guesses remaining --
	pickLetter = function() {
		for (i=0;i<wordSelection.length;i++) {
			if (wordSelection.indexOf(userChoice) !== -1) {
			//
			//display hangman images



			}
		}
	}
	
	//display letters already guessed

	lettersGuessed = function() {

		
	}

	

	//automatically choose another word after win/loss

renderWordHint();


	
};

//