function reverse(word) {
  // Write your algorithm here
  //const wordArray = word.split("");
  //const reversedWordArray = wordArray.reverse();
  //const reversedWord = reversedWordArray.join("");
  //return reversedWord;

  return word.split("").reverse().join("");
}

function isPalindrome(word){
  const reversedWord = reverse(word)

  //Input is the same as the reversed input
return word === reversedWord;
}



/* 
  Add your pseudocode here
*/


/*
  Add written explanation of your solution here
  
  --The function wil return true if string is a palindrome and return false if it is not 
  a palidrome.

  eg. abc === abc: true
      abc === cba: false

      if input is the same as reversed
      return true
      else 
      return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  
}

module.exports = isPalindrome;
