const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

/*  STEP 2
function encryptMessage (word, shift)
{
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}
*/

/* STEP 3
function decryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}
*/

/*STEP 4 
function decryptMessage (word, shift)
{
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}
*/

/* Question: Yes, Caesar will get "BRUTUS" back. The decryption function is the inverse of the encryption function. When applied sequentially, they cancel each other out, restoring the original message.*/