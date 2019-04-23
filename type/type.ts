// Boolean
let isAwesome: boolean = true;

// String
let username: string = 'Chris';
let password: string = '123';
// String Template Literal 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let punchline: string = 'Because it was free-range.';
let joke: string = `
    Q: Why did the chicken cross the road?
    A: ${punchline}
`;

// Number
let decimalNumber: number = 42;
let binaryNumber: number = 0b101010; // => 42
let octalNumber: number = 0o52; // => 42
let hexadecimalNumber: number = 0x2a; // => 42

// Array
let myPetFamily: string[] = ['rocket', 'fluffly', 'harry'];
// Alternative Array
let myPetFamilyAlternative: Array<string> = ['rocket', 'fluffly', 'harry'];

// Tuples
let myFavoriteTuple: [string, number, boolean];
myFavoriteTuple = ['chair', 20, true]; 

// Enum
enum Sizes {
    Small,
    Medium,
    Large,
}
Sizes.Small; // => 0
Sizes.Medium; // => 1
Sizes.Large; // => 2

enum ThemeColors {
    Primary = 'primary',
    Secondary = 'secondary',
    Dark = 'dark',
    DarkSecondary = 'darkSecondary',
}

// Any
let whoKnows: any = 4; // assigned a number
whoKnows = 'a beautiful string'; // can be reassigned to a string
whoKnows = false; // can be reassigned to a boolean

// Void
const darkestPlaceOnEarth = (): void => {
    console.log('Marianas Trench');
};

// Function Parameter
const tweetLength = (message = 'A default tweet') => {
    return message.length;
};

// Undefined and Null
let anUndefinedVariable: undefined = undefined;
let aNullVariable: null = null;

