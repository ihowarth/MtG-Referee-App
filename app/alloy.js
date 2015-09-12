/***************************************
 * Author          : Ian & Lewis Howarth
 * Project         : Magic the Gathering Referee App
 * Latest Revision : 12th September 2015
 ***************************************/


/*
 * APP singleton
 */

var APP = {
    // Custom recursive fuinction to remove all children of a view and null everything one at a time
    releaseAllMemoryOfView : function( view ) {
        // Getting the chilldren to null, then removing them from the view
        var childrenArray = view.getChildren();
        view.removeAllChildren();
        
        // Checking if each child has it's own children, recursing the function if they do and nulling them if not
        for ( var i = 0; i < childrenArray.length; i++) {
            var secondChildrenArray = childrenArray[i].getChildren();
            
            if ( secondChildrenArray.length > 0 ) {
                for ( var j = 0; j < secondChildrenArray.length; j++ ) {
                    APP.releaseAllMemoryOfView( secondChildrenArray[j] );
                }
                
            } else {
                childrenArray[i] = null;
            }
        }
    }
};


/*
 * Libraries
 */



/*
 * Modules
 */



/*
 * Global Variables
 * 
 * Fonts, colors and frquently used sizes etc are saved here so I can easily change the application without having to dive into the code again
 */

// Separating OSs, so we can differentiate the variables needed for them
if ( OS_IOS ) {
    Alloy.Globals.fonts = {
        regularFont : "HelveticaNeue",
        lightFont   : "HelveticaNeue-Light"
    };
    
    Alloy.Globals.deviceMeasurements = {
        height : Ti.Platform.displayCaps.platformHeight,
        width  : Ti.Platform.displayCaps.platformWidth,
        
        minusHeight : -Ti.Platform.displayCaps.platformHeight,
        minusWidth : -Ti.Platform.displayCaps.platformWidth,
        
        halfWidth : Ti.Platform.displayCaps.platformWidth / 2
    };
    
    Alloy.Globals.colors = {
        mainWinBackground : "#fff",
        defaultBackground : "#ddd",
        defaultText       : "#000"
    };
    
// ANDROID
} else {
    Alloy.Globals.fonts = {
        regularFont : "Roboto Regular",
        lightFont   : "Roboto Light"
    };
    
    Alloy.Globals.deviceMeasurements = {
        height : 567,
        width  : 360,
        
        minusHeight : -567,
        minusWidth  : -360,
        
        halfWidth : 180  
    };
    
    Alloy.Globals.colors = {
        mainWinBackground : "#fff",
        defaultBackground : "#ddd",
        defaultText       : "#000"
    };
}