var args = arguments[0] || {};

/*
 * Global variables
 */

/*
 * Initialisation functions - only executed once
 *
 * init
 * addEventListeners
 */

(function init() {
	addEventListeners();

	$.player1View.add(Alloy.createController("counterView", {
		//TODO
		//lifeAmount : CHOOSE
	}).getView());

	$.player2View.add(Alloy.createController("counterView", {
		//TODO
		//lifeAmount : CHOOSE
	}).getView());
})();

function addEventListeners() {
	$.coinFlipLabel.addEventListener("click", function(e) {
		var side = getRandomNumber(2);

		if (side == 1) {
			alert("Heads");

		} else {
			alert("Tails");
		}
	});

	$.diceRollLabel.addEventListener("click", function(e) {
		alert(getRandomNumber(6));
	});
}

/*
 * Main functions
 * 
 * getRandomNumber
 */

function getRandomNumber(limit) {
	var numberArray = [];

	for (var i = 0; i < limit; i++) {
		numberArray.push(i + 1);
	}

	return numberArray[Math.floor(Math.random() * numberArray.length)];
}