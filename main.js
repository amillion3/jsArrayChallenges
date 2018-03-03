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
var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55
var challenge3Max = Math.max.apply(Math, challengeThreeInputA);
var challenge3Min = Math.min.apply(Math, challengeThreeInputA);
var minCount = 0;
var maxCount = 0;
var finalAnswer = "";

for (var ijk = 0; ijk < challengeThreeInputA.length; ijk++) {
  if (challengeThreeInputA[ijk] === challenge3Min) {
    minCount++;
    if (minCount > 1) {
      finalAnswer = challenge3Max;
    }
  } else if (challengeThreeInputA[ijk] === challenge3Max) {
    maxCount++;
    if (maxCount > 1) {
      finalAnswer = challenge3Min;
    }
  }
}

document.getElementById("challenge-3").innerHTML = "<br>" + "Challenge Three: " + "<br>" + finalAnswer + "<br>";
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
// var array1 = [1,2];
// var array2 = [1];  //display = [2]
var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];  //display = [1, 4, 7]

for (var jjj = 0; jjj < array1.length; jjj++) {
  for (var l = 0; l < array2.length; l++) {
    if (array1[jjj] === array2[l]) {
      array1.splice(jjj, 1);
    }
  }
}
document.getElementById("challenge-5").innerHTML = "<br>" + "Challenge Five: " + "<br>" + array1 + "<br>";
// --------------------------------------------------------
// --- Challenge 6 ----------------------------------------
// --------------------------------------------------------
var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var inputArray = test3.sort(compareNumbers);
var answer = 0;
function compareNumbers(a, b) {  //function to properly sort array
  return a - b;
}
for (var ll = 0; ll < inputArray.length; ll++) {
  if ( (inputArray[ll] + 1) === ( inputArray[ll + 1]) ) {
      // do nothing
  }
  else {
    answer = inputArray[ll] + 1;
    break;
  }
}
document.getElementById("challenge-6").innerHTML = "<br>" + "Challenge Six: " + "<br>" + answer + "<br>";
// --------------------------------------------------------
// --- Challenge 7 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 8 ----------------------------------------
// --------------------------------------------------------
var test1 = 274; // Display = '2-7-4'
var test2 = 6815; // Display = '68-1-5'
//this may be the ugliest code i have ever written
//cringe
//and now i realize this won't work if it starts with an odd number
//whyyy
var arr = test2.toString().split("");

for (var klm = 0; klm < arr.length; klm++) {
  if (arr[klm] === "1" || arr[klm] === "3" || arr[klm] === "5" || arr[klm] === "7" || arr[klm] === "9") {
    var tempArrayOriginalValue = arr[klm];  //janky code requires me to store the original number here
    arr[klm] = "-" + arr[klm] + "-"; //odd number, so add a dash to left and right

    if (klm === arr.length - 1) {  //if its the last value, remove dash from the right side
      arr[klm] = "-" + tempArrayOriginalValue;  //dash on the left only
    }

    if (arr[klm - 1].endsWith("-")) {  //checks to see if previous index has a dash at the end
      arr[klm] = tempArrayOriginalValue + "-";
      if (klm === arr.length - 1) {  // if its the last value and the previous value has a dash
        arr[klm] = tempArrayOriginalValue; //no dashes
      }
    }
  }
}
arr = arr.join("");
document.getElementById("challenge-8").innerHTML = "<br>" + "Challenge Eight: " + "<br>" + arr + "<br>";
// --------------------------------------------------------
// --- Challenge 9 ----------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// --- Challenge 10 ---------------------------------------
// --------------------------------------------------------
