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

}


/*
 * Main functions
 */