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

    $.mainWin.add( 
        Alloy.createController("gameView", {}).getView()
    );

    $.mainWin.open();
})();

function addEventListeners() {

}


/*
 * Main functions
 */