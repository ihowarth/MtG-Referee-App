var args = arguments[0] || {};

/*
 * Global variables
 */
// Life managers
var startingLifeAmount;
var currentLife;
// Change managers
var changeLifeAmount = 0;
var minChangeAmount = 1; // Default
var changeTimer;

/*
 * Initialisation functions - only executed once
 *
 * init
 * addEventListeners
 */

(function init() {
	addEventListeners();
})();

function addEventListeners() {
	$.minusSideView.addEventListener("click", function(e) {
		changeCurrentLife(-minChangeAmount);
	});

	$.plusSideView.addEventListener("click", function(e) {
		changeCurrentLife(+minChangeAmount);
	});
}

/*
 * Main functions
 *
 * changeCurrentLife
 */

function changeCurrentLife(amountToChange) {
	// Clearing the timer each time the life is changed, so we can change it all in one go
	if (changeTimer) {
		clearTimeout(changeTimer);
	}

	changeLifeAmount += amountToChange;

	// We have to manually add the '+' symbol
	if (changeLifeAmount > 0) {
		$.changeLabel.text = "+" + changeLifeAmount;
	} else {
		$.changeLabel.text = changeLifeAmount;
	}

	changeTimer = setTimeout(function() {
		currentLife += changeLifeAmount;
		$.currentLifeLabel.text = currentLife;
		// Resetting
		changeLifeAmount = 0;
		$.changeLabel.text = "";
	}, 1000);
}

/*
 * Exported functions
 * 
 * setStartingLifeAmount
 * setMinChangeAmount
 * resetLifeAmount
 */

// This has to be the first function we call in the widget
function setStartingLifeAmount(amount) {
    startingLifeAmount = amount;
    resetLifeAmount();
}

function setMinChangeAmount(amount) {
    minChangeAmount = amount;
}

// Reset life amount allow users to start a new game again quickly
function resetLifeAmount() {
	currentLife = startingLifeAmount;
	$.currentLifeLabel.text = currentLife;
}

/*
 * Exports
 */
exports.setStartingLifeAmount = setStartingLifeAmount;
exports.setMinChangeAmount = setMinChangeAmount;
exports.resetLifeAmount = resetLifeAmount; 