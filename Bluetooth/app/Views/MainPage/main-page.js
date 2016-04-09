var viewModule = require("ui/core/view");
var page;
exports.pageLoaded = function (args) {
   page = args.object;
}
exports.fabTap = function (args) {
   var bottle = page.getViewById("bottle");
   var bottlePercentageHeight = bottle.getMeasuredHeight()/page.getMeasuredHeight();
   console.log("Height: " + bottlePercentageHeight);
   bottle.style.backgroundPosition = "23px 250px";
}