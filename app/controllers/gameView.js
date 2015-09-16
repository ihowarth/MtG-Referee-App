var args = arguments[0] || {};

/*
 * Global variables
 */
var lifeAmount = 20;

/*
 * Initialisation functions - only executed once
 *
 * init
 * addEventListeners
 */

(function init() {
    addEventListeners();
    $.counterView1.setMinChangeAmount(70);
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

    $.resetButtonLabel.addEventListener("click", function(e) {
        // Create an alert dialog because resetting is a destructive action
        var resetAlert = Ti.UI.createAlertDialog({
            title : "Are you sure you want to reset the counters?",
            buttonNames : ["OK", "Cancel"],
            cancel : 2

        });

        // Separating eventListener function so it can be removed
        function resetCounterViews(e) {
            // Only reset if the user clicks "OK"
            if (e.index == 0) {
                resetAlert.removeEventListener("click", resetCounterViews);
                $.counterView1.resetLifeAmount();
                $.counterView2.resetLifeAmount();
            }
        };
        resetAlert.addEventListener("click", resetCounterViews);

        resetAlert.show();
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