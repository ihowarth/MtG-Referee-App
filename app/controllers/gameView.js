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
    
    $.player1View.add(
        Alloy.createController("counterView", {
            //TODO
            //lifeAmount : CHOOSE
        }).getView()
    );
    
    $.player2View.add(
        Alloy.createController("counterView", {
            //TODO
            //lifeAmount : CHOOSE
        }).getView()
    );
})();

function addEventListeners() {
    //TODO - coinFlipLabel event
    
    //TODO - diceRollLabel event
}


/*
 * Main functions
 */
function flipCoin() {
    var coinValue;
    
    //TODO: Randomly get heads or tails from an Array containing heads and tails
    
    
    alert(coinValue);
}

function rollDice(howManySides) {
    var diceValue;
    
    //TODO: Randomly get a number from an Array containing the amount of sides passed as an argument
    
    
    alert(diceValue);   
}