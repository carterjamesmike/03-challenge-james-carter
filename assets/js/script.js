// Assignment code here
//Password character arrays 
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
const upperCase = lowerCase.map(element => {
    return element.toUpperCase();
});
const numericals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',]

function generatePassword() {
  var passwordLength = prompt("How long would you like your password? Please type a number between 8 and 128");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please type a number between 8 and 128")
  }
  else {
    var lowerCasePrompt = prompt("Would you like lowercase letters? Please type y or n")
    var lowerCaseSelection = lowerCasePrompt.toUpperCase();
    if (lowerCaseSelection === "Y" || lowerCaseSelection === "YES") {
      lowerCaseSelection = true;
      console.log("horray");
      console.log(lowerCaseSelection);
    } else {
      lowerCaseSelection = false;
      console.log("dang");
      console.log(lowerCaseSelection);
    }
  }
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
