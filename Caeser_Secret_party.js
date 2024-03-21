/*I am not sure if I did this right. I am referencing the use of course material, Book "JavaScript from Beginner to Profession", and chatgpt*/

//Encrypting the plaintext message with a shift value.

function encryptMessage(message, shift) {
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (encryptedMessage.match(/[a-z]/i)) {
    let charCode = message.charCodeAt(i);
    let offset = (charCode < 91) ? 65 : 97;
    let shiftedCharCode = ((charCode - offset + shift) % 26) + offset;
    encryptedMessage += String.fromCharCode(shiftedCharCode);
      } else {
          encryptedMessage += char;
      }
  }

  return encryptedMessage;
}


//Inserting a random letter from the alphabet after every two characters in the encrypted message.

function randomLetterInsert(message) {
  let insertedRandomLetter = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < message.length; i++) {
      insertedRandomLetter += message[i];


if ((i + 1) % 2 === 0) {
          let randomIndex = Math.floor(Math.random() * alphabet.length);
          let randomLetter = alphabet[randomIndex];
          insertedRandomLetter += randomLetter;
      }
  }

  return insertedRandomLetter;
}



const plaintext = "Hello, World!";
const shiftValue = 2;

// Encrypt the plaintext message
let secret = encryptedMessage (plaintext, shift);
console.log(secret);

// Insert random letters every two characters
let randomEncrypted = insertedRandomLetter(secret);
console.log(randomEncrypted);

//Remove the random letters inserted after every two characters in the encrypted message


function decryptLetters(letter, shift) {
  let decryptedMessage = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < letter.length; i++) {
      if ((i + 1) % 2 === 0 && alphabet.includes(message[i])) {
          // Skip the random letter
      } else {
          decryptedMessage += letter[i];
      }
  }

  return decryptedMessage;
}


//Decrypting the encrypted message with the reverse shift value


function decryptMessage(message, shift) {
  return encryptMessage(message, 26 - shift); // Using the reverse shift to decrypt
}

//Use the following to decrypt the encrypted message and retrieve the original plaintext message:


let insertedRandomLetter = "Kfnsglq, Zowxmhapxhh..";
let shift = 2;

// Remove random letters inserted every two characters
let messageEncrypted = decryptMessage(insertedRandomLetter);

// Decrypt the Caesar cipher encrypted message
let messageDecrypted = decryptMessage(MessageEncrypted, shift);
console.log(messageDecrypted);


/*let encryptedSecretMessage = "Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.";
let shift = 42;

// Decrypt the secret message using a shift value of 42
let decryptedSecretMessage = decryptMessage(encryptedSecretMessage, shift);
console.log(decryptedSecretMessage);*/
