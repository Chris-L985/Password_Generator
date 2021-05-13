// Assignment code here
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*','(', ')', '_', '-', '{', '}','+', '=','<', '>', '.', '|', '~' ];

const generateRandomNum = (num) => {
  return Math.floor(Math.random() * num);
};
const generatePassword = (limit, wantLowerCase, wantUpperCase, wantNumbers, wantSpecialCharacters) => {
  let randomPasswordCharacters = [];
  for (let x = 0; x < limit; x++) {
    let randomNumber = generateRandomNum(4);
    
    switch (randomNumber) {
      case 0:
        let randomLowerCaseNum = generateRandomNum(25);
        let lowerCaseLetter = lowerCaseLetters[randomLowerCaseNum];
        randomPasswordCharacters.push(lowerCaseLetter);
        break;
      case 1:
        let randomUpperCaseNum = generateRandomNum(25);
        let upperCaseLetter = upperCaseLetters[randomUpperCaseNum];
        randomPasswordCharacters.push(upperCaseLetter);
        break;
      case 2:
        let randomNumberNum = generateRandomNum(9);
        let randomNumNumNum = numbers[randomNumberNum];
        randomPasswordCharacters.push(randomNumNumNum);
        break;
      case 3:
        let randomSpecialChar = generateRandomNum(20);
        let specialCharacter = specialChars[randomSpecialChar];
        randomPasswordCharacters.push(specialCharacter);
        break;
      default:
        throw new Error('Unknown number given.');
    }
  }
  return randomPasswordCharacters.join('');
};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let howLongIsPassword = prompt('How long do you want your password to be? Please enter in a number between 8 and 128.');
  if (howLongIsPassword < 8 || howLongIsPassword > 128) {
    alert('Pick another number within the given parameters.');

    writePassword();

    let wantLowerCase = confirm('Do you want to use lower case letters?')
    
    let wantUpperCase = confirm('Do you want to use upper case letters?');

    let wantNumbers = confirm('Do you want to use numbers?');

    let wantSpecialCharacters = confirm('Do you want to use special characters?');

    if(howLongIsPassword !== '') {
      let password = generatePassword(howLongIsPassword, wantLowerCase, wantUpperCase, wantNumbers, wantSpecialCharacters);
      let passwordText = document.querySelector("#password");

      passwordText.value = password;
    }
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
