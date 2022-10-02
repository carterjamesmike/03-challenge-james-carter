// Assignment code here

//Password character arrays 
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
const upperCase = lowerCase.map(element => {
    return element.toUpperCase();
});
const numericals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',]
const finalArr = [];
var passwordToString;

function generatePassword() {
  var passwordLength;
  var lowerCaseSelection;
  var upperCaseSelection;
  var numericalsSelection;
  var specialCharSelection;
  const finalPassword = [];
  passwordLengthFunc();
  function passwordLengthFunc() {
       passwordLength = prompt("How long would you like your password? Please type a number between 8 and 128");
      console.log(passwordLength);
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
         alert("Please type a number between 8 and 128");
         passwordLengthFunc();
      } else {
        lowerCaseFunc();
      }     
  }
  function lowerCaseFunc() {
    var lowerCasePrompt = prompt("Would you like lowercase letters? Please type y or n")
    lowerCaseSelection = lowerCasePrompt.toUpperCase();
    if (lowerCaseSelection === "Y" || lowerCaseSelection === "YES") {
      lowerCaseSelection = true;
      console.log("lower horray");
      console.log(lowerCaseSelection);
      upperCaseFunc();
    } else if (lowerCaseSelection === "N" || lowerCaseSelection === "NO") {
      lowerCaseSelection = false;
      console.log("lower dang");
      console.log(lowerCaseSelection);
      upperCaseFunc();
    } else {
      alert("Please type 'Yes' or 'No'");
      lowerCaseFunc();
    }
  }
  function upperCaseFunc() {
    var upperCasePrompt = prompt("Would you like uppercase letters? Please type y or n")
    upperCaseSelection = upperCasePrompt.toUpperCase();
    if (upperCaseSelection === "Y" || upperCaseSelection === "YES") {
      upperCaseSelection = true;
      console.log("Upper horray");
      console.log(upperCaseSelection);
      numericalsfunc();
    } else if (upperCaseSelection === "N" || upperCaseSelection === "NO") {
      upperCaseSelection = false;
      console.log("Upper dang");
      console.log(upperCaseSelection);
      numericalsfunc();
    } else {
      alert("Please type 'Yes' or 'No'");
      upperCaseFunc();
    }
  }
  function numericalsfunc() {
    var numericalsPrompt = prompt("Would you like numbers? Please type y or n")
    numericalsSelection = numericalsPrompt.toUpperCase();
    if (numericalsSelection === "Y" || numericalsSelection === "YES") {
      numericalsSelection = true;
      console.log("numerical horray");
      console.log(numericalsSelection);
      specialCharfunc();
    } else if (numericalsSelection === "N" || numericalsSelection === "NO") {
      numericalsSelection = false;
      console.log("numerical dang");
      console.log(numericalsSelection);
      specialCharfunc();
    } else {
      alert("Please type 'Yes' or 'No'");
      numericalsFunc();
    }
  }
  function specialCharfunc() {
    var specialCharPrompt = prompt("Would you like special characters? Please type y or n")
    specialCharSelection = specialCharPrompt.toUpperCase();
    if (specialCharSelection === "Y" || specialCharSelection === "YES") {
      specialCharSelection = true;
      console.log("special horray");
      console.log(specialCharSelection);
      joinArr();
    } else if (specialCharSelection === "N" || specialCharSelection === "NO") {
      specialCharSelection = false;
      console.log("special dang");
      console.log(specialCharSelection);
      joinArr();
    } else {
      alert("Please type 'Yes' or 'No'");
      specialCharFunc();
    }
  }
  function joinArr (){
    if (lowerCaseSelection === false && upperCaseSelection === false && numericalsSelection === false && specialCharSelection === false) {
      alert("How can we generate a password with no characters? Lets start over");
      generatePassword();
    } else {
      lowerCaseCheck();
    }
    function lowerCaseCheck () {
      if (lowerCaseSelection === true) {
        finalArr.push(...lowerCase);
        console.log("lowerCase true");
        upperCaseCheck();
      } else {
        console.log("lowerCase false");
        upperCaseCheck();
      } 
    }
    function upperCaseCheck () {
      if (upperCaseSelection === true) {
        finalArr.push(...upperCase);
        console.log("upperCase true");
        numericalsCheck();
      } else {
        console.log("upperCase false");
        numericalsCheck();
      }
    }
    function numericalsCheck () {
      if (numericalsSelection === true) {
        finalArr.push(...numericals);
        console.log("numericals true");
        specialCharsCheck();
      } else {
        console.log("numericals false");
        specialCharsCheck();
      }
    }
    function specialCharsCheck () {
      if (specialCharSelection === true) {
        finalArr.push(...specialChars);
        console.log("specialChars true");
        console.log(finalArr);
        createPassword();
      } else {
        console.log("specialChars false");
        console.log(finalArr);
        createPassword();
      }
    }
  }
  function createPassword () {
    
    for (var i = 0; i < passwordLength; i++) {
      finalPassword.push(finalArr[Math.floor((Math.random() * finalArr.length))]);
    }
    
  }

  passwordToString = finalPassword.join("");
  console.log(`This is the password ${passwordToString}`);
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordToString;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
