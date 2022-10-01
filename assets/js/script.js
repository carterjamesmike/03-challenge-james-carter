// Assignment code here

//Password character arrays 
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
const upperCase = lowerCase.map(element => {
    return element.toUpperCase();
});
const numericals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',]

function generatePassword() {
  passwordLengthFunc();
  function passwordLengthFunc() {
      var passwordLength = prompt("How long would you like your password? Please type a number between 8 and 128");
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
    var lowerCaseSelection = lowerCasePrompt.toUpperCase();
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
    var upperCaseSelection = upperCasePrompt.toUpperCase();
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
    var numericalsSelection = numericalsPrompt.toUpperCase();
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
    var specialCharSelection = specialCharPrompt.toUpperCase();
    if (specialCharSelection === "Y" || specialCharSelection === "YES") {
      specialCharSelection = true;
      console.log("special horray");
      console.log(specialCharSelection);
    } else if (specialCharSelection === "N" || specialCharSelection === "NO") {
      specialCharSelection = false;
      console.log("special dang");
      console.log(specialCharSelection);
    } else {
      alert("Please type 'Yes' or 'No'");
      specialCharFunc();
    }
  }
console.log(numericalsSelection);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
