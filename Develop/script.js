// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('button has been clicked');

  // 1. prompt user for password criteria
  var passwordLengthInput = window.prompt("Please enter the number of characters you would like your password to have. It must be between 8 and 128.");
  //  1a. password length between 8 and 128
  if (passwordLengthInput < 8 || passwordLengthInput > 128) {
    return ("Invalid password length desired! Click the button below to restart the generator!");
  }
  else {
    console.log("valid length selected");
  }
  // series of prompts on whether to include certain characters
  var addLower = confirm("Would you like to include lowercase letters? Click [OK] for yes, and [Cancel] for no");
  var addUpper = confirm("Would you like to include uppercase letters? Click [OK] for yes, and [Cancel] for no");
  var addNum = confirm("Would you like to include numbers? Click [OK] for yes, and [Cancel] for no");
  var addSpec = confirm("Would you like to include special characters? Click [OK] for yes, and [Cancel] for no");

  //  1b. lowercase, uppercase, numbers, specials

  var charSet = "";
  // first if ensures that at least one criteria was selected
  if (!addLower && !addUpper && !addNum && !addSpec) {
    return ("You didn't select any character criteria, silly goose! Try again!");
  }
  if (addLower) {
    // add the lowercase letters to the character pool
    charSet += 'abcdefghijklmnopqrstuvwxyz';
    console.log("lower case has been added");
  }
  if (addUpper) {
    // add the uppercase letters to the character pool
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log("upper case has been added");
  }
  if (addNum) {
    // add numbers to character pool
    charSet += '0123456789';
    console.log("numbers have been added");
  }
  if (addSpec) {
    // add special characters to the pool
    charSet += ' !#$%&"()*+,-./:;<>=?@[]\^_`{}|~';
    console.log("specials have been added");
  }
  // 2. validate the input
  // creates a variable with a numeric value the length of the character set
  var charLength = charSet.length;
  // sets the password length to a numeric value
  var passwordLength = passwordLengthInput.number;

  // 3. generate the password based on the criteria

  // create the password variable as a string
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    // move through the character set, selecting a number at random, pulling the character at that number, and adding it to the random password until the desired length is met
    var character = Math.floor(Math.random() * charLength);
    randomPassword += charSet.charAt(character);
  }
  console.log(randomPassword);
  // 4. Display generated password on the page
  return (randomPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
