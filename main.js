console.log("Hello");

// --------------------------------------------------------
// --- Challenge 1 ----------------------------------------
// --------------------------------------------------------
var challengeOneInput = "jumbo shrimp";  //541 659
var splitInput = challengeOneInput.split(" ");  //splits to two array values
var firstWordArray = splitInput[0].toString();  //splits each word to seperate indices
var secondWordArray = splitInput[1].toString();  //splits each word to seperate indices
var firstWordScore = 0;
var secondWordScore = 0;
//calculate UTF-16 code unit at a given index
for (var i = 0; i < splitInput.length; i++) {
  if (i === 0) {  //this if loop is needed in case word lengths are different
    for (var j = 0; j < firstWordArray.length; j++) {
      firstWordScore += firstWordArray.charCodeAt(j);
    }
  } else {
    for (var k = 0; k < secondWordArray.length; k++) {
      secondWordScore += secondWordArray.charCodeAt(k);
    }
  }
}
//check to see which word combo is higher
if (firstWordScore >= secondWordScore) {
  document.getElementById("challenge-1").innerHTML = "Challenge One: " + "<br>" + splitInput[0];
} else {
  document.getElementById("challenge-1").innerHTML = "Challenge One: " + "<br>" + splitInput[1];
}
// --------------------------------------------------------
// --- Challenge 2 ----------------------------------------
// --------------------------------------------------------
var challengeTwoInputA = [1,2,3,4,5,6,7,8,9,33,77];  //[1,2,7,4,5,6,3,8,9,77,33];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var testArray = challengeTwoInputA;
// var testArray = challengeTwoInputB;
// var testArray = challengeTwoInputC;
var str = "";
for (var iii = 0; iii < testArray.length; iii++) {
  str = testArray[iii].toString();
  if (str.includes("3")) {
    testArray[iii] = 1 * (str.replace(/[3]/g,7));
  } else if (str.includes("7")) {
      testArray[iii] = 1 * (str.replace(/[7]/g,3));
  }
}
document.getElementById("challenge-2").innerHTML = "<br>" + "Challenge Two: " + "<br>" + testArray + "<br>";
// --------------------------------------------------------
// --- Challenge 3 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 4 ----------------------------------------
// --------------------------------------------------------
var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

for (var i = 0; i < challengeFourInputA.length; i++) {
  challengeFourInputA[i] = challengeFourInputA[i] * 2;
}
document.getElementById("challenge-4").innerHTML = "<br>" + "Challenge Four: " + "<br>" + challengeFourInputA + "<br>";
// --------------------------------------------------------
// --- Challenge 5 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 6 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 7 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 8 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 9 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 10 ---------------------------------------
// --------------------------------------------------------
