// Assignment Code
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
//Defining arrays to show different character types
const specialArr = ["!", "@", "#", "$"];
const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCasesArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCasesArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Prompts user to choose password length and asks which types of characters to include
function generatePassword() {
    var passwordLength = Number(prompt("Please enter the amount of characters your password will be. Must be between 8 and 128."));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Must be between 8 and 128 characters!"))
    var makeString = parseInt(passwordLength)
    let Array = []
    let password = "";
    
    var numbers = confirm("Are numbers required in your password?");
  
    var lowerCases = confirm("Are lowercases required in your password?");
  
    var upperCases = confirm("Are uppercases required in your password?");
  
    var special = confirm("Are special characters required in your password?");
//If statements merge chosen character arrays and returns new array using concat
    if (numbers){
    Array = Array.concat(numbersArr)
}
    if (special){
    Array = Array.concat(specialArr)
}
    if (lowerCases){
    Array = Array.concat(lowerCasesArr)
}
    if (upperCases){
    Array = Array.concat(upperCasesArr)
}
//Randomly generates characters from selected character types
for (var i = 0; i < makeString; i++) {
    var Index = Math.floor(Math.random() * Array.length);
    password += Array[Index]}
    return password;}
  
generateBtn.addEventListener('click', writePassword);
