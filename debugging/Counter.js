"use strict";
var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        var count = 5;
        for (var i = 1; i <= 7; i++) {
            document.write(i.toString + '<br/>');
        }
        console.log('All done!');
    };
    return SimpleCounter;
}());
var count = new SimpleCounter();
count.count();
//# sourceMappingURL=Counter.js.map