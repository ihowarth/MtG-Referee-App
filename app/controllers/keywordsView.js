var args = arguments[0] || {};

var Keywords = require("Keywords");
var allKeywords = Keywords.getAll("MagicTheGathering");

var requestTimeout;

(function init() {
    setData(allKeywords);
    addEventListener();
})();

function addEventListener() {
    $.backLabel.addEventListener("click", function(e) {
        args.killSelf();
    });

    $.keywordsTableView.addEventListener("click", function(e) {
        Ti.UI.createAlertDialog({
            title : "",
            message : e.source.lol,
            ok : "OK"
        }).show();
    });

    $.searchField.addEventListener("change", function(e) {
        if (requestTimeout) {
            clearTimeout(requestTimeout);
        }

        if (e.value.length > 3) {
            requestTimeout = setTimeout(function() {
                setData(Keywords.findKeyword("MagicTheGathering", e.value));
            }, 1000);

        } else if (e.value == "") {
            setData(allKeywords);
        }
    });
}

function setData(data) {
    var keywordRowsArray = [];

    for (var key in data) {
        console.log(data[key]);
        var row = Ti.UI.createTableViewRow({
            lol : data[key].description,
            height : 40
        });
        var label = Ti.UI.createLabel({
           color : "#000",
           font : {
               fontSize : 14
           },
           text :  data[key].title,
           touchEnabled : false
        });
        row.add(label);
        keywordRowsArray.push(row);
    }

    $.keywordsTableView.setData(keywordRowsArray);
}