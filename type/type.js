"use strict";
// Boolean
var isAwesome = true;
// String
var username = 'Chris';
var password = '123';
// String Template Literal 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
var punchline = 'Because it was free-range.';
var joke = "\n    Q: Why did the chicken cross the road?\n    A: " + punchline + "\n";
// Number
var decimalNumber = 42;
var binaryNumber = 42; // => 42
var octalNumber = 42; // => 42
var hexadecimalNumber = 0x2a; // => 42
// Array
var myPetFamily = ['rocket', 'fluffly', 'harry'];
// Alternative Array
var myPetFamilyAlternative = ['rocket', 'fluffly', 'harry'];
// Tuples
var myFavoriteTuple;
myFavoriteTuple = ['chair', 20, true];
// Enum
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
Sizes.Small; // => 0
Sizes.Medium; // => 1
Sizes.Large; // => 2
var ThemeColors;
(function (ThemeColors) {
    ThemeColors["Primary"] = "primary";
    ThemeColors["Secondary"] = "secondary";
    ThemeColors["Dark"] = "dark";
    ThemeColors["DarkSecondary"] = "darkSecondary";
})(ThemeColors || (ThemeColors = {}));
// Any
var whoKnows = 4; // assigned a number
whoKnows = 'a beautiful string'; // can be reassigned to a string
whoKnows = false; // can be reassigned to a boolean
// Void
var darkestPlaceOnEarth = function () {
    console.log('Marianas Trench');
};
// Function Parameter
var tweetLength = function (message) {
    if (message === void 0) { message = 'A default tweet'; }
    return message.length;
};
// Undefined and Null
var anUndefinedVariable = undefined;
var aNullVariable = null;
