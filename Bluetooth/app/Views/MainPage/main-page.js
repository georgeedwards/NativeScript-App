var viewModule = require("ui/core/view");
var enums = require("ui/enums");

var page;
exports.pageLoaded = function (args) {
   page = args.object;
}
exports.fabTap = function (args) {
   var socialButtons = page.getViewById("socialOption");
   socialButtons.style.visibility = "visible";
   socialButtons.animate({
        translate: { x: 0, y: -100 },
        duration: 1000,
        curve: enums.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
   });
}

/* ====== Bottle endering Routine ========

var bottle = page.getViewById("bottle");
   var bottlePercentageHeight = bottle.getMeasuredHeight()/page.getMeasuredHeight();
   console.log("Height: " + bottlePercentageHeight);
   bottle.style.backgroundPosition = "23px 250px";
   
   ====================================== */