var args = arguments[0] || {};

/*
 * Global variables
 */
var currentLife;
var changeLifeAmount = 0;
var changeTimer;

/*
 * Initialisation functions - only executed once
 *
 * init
 * addEventListeners
 */

(function init() {
    addEventListeners();
    
    // Using currentLife so we don't have to parse currentLifeLabel
    currentLife = args.lifeAmount || 20;
    $.currentLifeLabel.text = currentLife;
})();

function addEventListeners() {
    $.minusSideView.addEventListener("click", function(e) {
        changeCurrentLife(-1);
    });
    
    $.plusSideView.addEventListener("click", function(e) {
        changeCurrentLife(+1); 
    });
}


/*
 * Main functions
 */

function changeCurrentLife(amountToChange) {
    // Clearing the timer each time the life is changed, so we can change it all in one go
    if ( changeTimer ) {
        clearTimeout( changeTimer );
    }
    
    changeLifeAmount += amountToChange;
    
    // We have to manually add the '+' symbol
    if ( changeLifeAmount > 0 ) {
        $.changeLabel.text = "+" + changeLifeAmount;    
    } else {
        $.changeLabel.text = changeLifeAmount;   
    }
    
    changeTimer = setTimeout( function() {
        currentLife += changeLifeAmount;
        $.currentLifeLabel.text = currentLife;
        // Resetting
        changeLifeAmount = 0;    
        $.changeLabel.text = "";
    }, 1000);
}