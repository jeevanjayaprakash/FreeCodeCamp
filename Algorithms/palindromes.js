/**
 * Check for palindromes
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which checks if a string provided by a user is a palindrome (a word that is spelled the same way both backwards
 and forwards, ignoring puncutation, case and spelling.
 */
 
 function palindrome(str) {
  var initialInput = str;
  initialInput = initialInput.toLowerCase();
  var inputReplaced = initialInput.replace(/[^a-zA-Z0-9]/g, ""); // regex: ^ negates and g is global 
  var array = [];
  
  for (i = 0; i < inputReplaced.length; i++){
    array[i] = inputReplaced[i];
  }
  reverseArray = array.reverse();
  var returnStr = reverseArray.join("");
  
  if(returnStr == inputReplaced) {
    return true;
  } else {
    return false;
  }
 
}
