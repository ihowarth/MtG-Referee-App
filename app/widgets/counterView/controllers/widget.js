var args = arguments[0] || {};

/*
 * Global variables
 */
var currentLife;
var changeLifeAmount = 0;
var changeTimer;
var minChangeAmount = 1;

/*
 * Initialisation functions - only executed once
 *
 * init
 * addEventListeners
 */

(function init() {
	addEventListeners();

	// Using currentLife so we don't have to parse currentLifeLabel
	currentLife = args.lifeAmount;
	$.currentLifeLabel.text = currentLife;
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
 * resetLifeAmount
 */

function setMinChangeAmount(amount) {
	minChangeAmount = amount;
}

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

// Reset life amount allow users to start a new game again quickly
function resetLifeAmount() {
	currentLife = args.lifeAmount;
	$.currentLifeLabel.text = currentLife;
}

/*
 * Exports
 */
exports.resetLifeAmount = resetLifeAmount; 
exports.setMinChangeAmount = setMinChangeAmount;