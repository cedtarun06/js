// tarun cedcoss bottle pen diary
/**tarun cedcoss bottle pen diary */
var myName;
var a;

var b;
b = a;
var a = 9;
var myFirstName = "Tarun";
var myLastName = "Soni";
a =5;
var b;
b= 10;
var c;
c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
// Variable declarations
let catSound = "Meow!";
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
const sum = 10 + 10;
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const FCC = "freeCodeCamp";
let fact = "is COOL!";

fact = "is awesome!";
console.log(FCC, fact);
const difference = 45 - 33;
// Change this line
// Change this line
// Change this line
// Change this line
// Change this line
console.log(FCC, fact);
console.log(FCC, fact);
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /=12;
b /=4;
c /=11;
const myStr = "This is the start." + " This is the end"; // Change this lin
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);