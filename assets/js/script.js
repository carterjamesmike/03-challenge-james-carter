//Password character arrays 
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
const upperCase = lowerCase.map(element => {
    return element.toUpperCase();
});
const numericals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',]

 //Final array that will hold other arrays based off user choice
const finalArr = [];

//Final password variable to display for user
var passwordToString;

//Primary funciton to house and call on all other generating functions
function generatePassword() {
  ///Variables that store user choice for password length and character selections
  var passwordLength;
  var lowerCaseSelection;
  var upperCaseSelection;
  var numericalsSelection;
  var specialCharSelection;
  //Array that will hold randomly generated password before being converted into a string without commas
  const finalPassword = [];
  //Calls first user choice function
  passwordLengthFunc();
  //Function to determine user preference in password length and call first of character selection functions
  function passwordLengthFunc() {
       passwordLength = prompt("How long would you like your password? Please type a number between 8 and 128");
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
         alert("Please type a number between 8 and 128");
         passwordLengthFunc();
      } else {
        li1.textContent = `Password length: ${passwordLength}`;
        lowerCaseFunc();
      }     
  }
  //Function that prompts and stores user choice for inclusion of lowercase characters and calls on next character selection function 
  function lowerCaseFunc() {
    var lowerCasePrompt = prompt("Would you like lowercase letters? Please type y or n")
    lowerCaseSelection = lowerCasePrompt.toUpperCase();
    if (lowerCaseSelection === "Y" || lowerCaseSelection === "YES") {
      lowerCaseSelection = true;
      li2.textContent = "Lowercase letters: ✅";
      upperCaseFunc();
    } else if (lowerCaseSelection === "N" || lowerCaseSelection === "NO") {
      lowerCaseSelection = false;
      li2.textContent = "Lowercase letters: ❌";
      upperCaseFunc();
    } else {
      alert("Please type 'Yes' or 'No'");
      lowerCaseFunc();
    }
  }
  //Function that prompts and stores user choice for inclusion of uppercase characters and calls on next character selection function 
  function upperCaseFunc() {
    var upperCasePrompt = prompt("Would you like uppercase letters? Please type y or n")
    upperCaseSelection = upperCasePrompt.toUpperCase();
    if (upperCaseSelection === "Y" || upperCaseSelection === "YES") {
      upperCaseSelection = true;
      li3.textContent = "Uppercase letters: ✅";
      numericalsFunc();
    } else if (upperCaseSelection === "N" || upperCaseSelection === "NO") {
      upperCaseSelection = false;
      li3.textContent = "Uppercase letters: ❌";
      numericalsFunc();
    } else {
      alert("Please type 'Yes' or 'No'");
      upperCaseFunc();
    }
  }
  //Function that prompts and stores user choice for inclusion of numerical characters and calls on next character selection function 
  function numericalsFunc() {
    var numericalsPrompt = prompt("Would you like numbers? Please type y or n")
    numericalsSelection = numericalsPrompt.toUpperCase();
    if (numericalsSelection === "Y" || numericalsSelection === "YES") {
      numericalsSelection = true;
      li4.textContent = "Numbers: ✅";
      specialCharFunc();
    } else if (numericalsSelection === "N" || numericalsSelection === "NO") {
      numericalsSelection = false;
      li4.textContent = "Numbers: ❌";
      specialCharFunc();
    } else {
      alert("Please type 'Yes' or 'No'");
      numericalsFunc();
    }
  }
  //Function that prompts and stores user choice for inclusion of special characters and calls on function to user selected character arrays
  function specialCharFunc() {
    var specialCharPrompt = prompt("Would you like special characters? Please type y or n")
    specialCharSelection = specialCharPrompt.toUpperCase();
    if (specialCharSelection === "Y" || specialCharSelection === "YES") {
      specialCharSelection = true;
      li5.textContent = "Special Characters: ✅";
      joinArr();
    } else if (specialCharSelection === "N" || specialCharSelection === "NO") {
      specialCharSelection = false;
      li5.textContent = "Special Characters: ❌";
      joinArr();
    } else {
      alert("Please type 'Yes' or 'No'");
      specialCharFunc();
    }
  }
  //Primary function that joins user selected arrays into joinArr array. Checks if any imput was included first, then call on other functions that check other user imputs
  function joinArr (){
    if (lowerCaseSelection === false && upperCaseSelection === false && numericalsSelection === false && specialCharSelection === false) {
      alert("How can we generate a password with no characters? Lets start over");
      generatePassword();
    } else {
      lowerCaseCheck();
    }
    //Function that first performs a check on whether or not to include lowercase characters and adds that array if true then calls on next check/add funciton
    function lowerCaseCheck () {
      if (lowerCaseSelection === true) {
        finalArr.push(...lowerCase);
        upperCaseCheck();
      } else {
        upperCaseCheck();
      } 
    }
    //Function that first performs a check on whether or not to include uppercase characters and adds that array if true then calls on next check/add funciton    
    function upperCaseCheck () {
      if (upperCaseSelection === true) {
        finalArr.push(...upperCase);
        numericalsCheck();
      } else {
        numericalsCheck();
      }
    }
    //Function that first performs a check on whether or not to include numerical characters and adds that array if true then calls on next check/add funciton
    function numericalsCheck () {
      if (numericalsSelection === true) {
        finalArr.push(...numericals);
        specialCharsCheck();
      } else {
        specialCharsCheck();
      }
    }
    //Function that first performs a check on whether or not to include special characters and adds that array if true then calls function to randomly pick characters from finalArr array  
    function specialCharsCheck () {
      if (specialCharSelection === true) {
        finalArr.push(...specialChars);
        createPassword();
      } else {
        createPassword();
      }
    }
  }
  //Function that randomly picks characters from finalArr array to build password
  function createPassword () {  
    for (var i = 0; i < passwordLength; i++) {
      finalPassword.push(finalArr[Math.floor((Math.random() * finalArr.length))]);
    }  
  }
  //Assigns finalPassword array into variable passwordToString without spaces or commas
  passwordToString = finalPassword.join("");
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
