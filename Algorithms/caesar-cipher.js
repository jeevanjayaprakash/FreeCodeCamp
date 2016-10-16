/**
 * Caesar's Cipher
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which implements the Caesar Cipher, a simple encryption technique.
 */

function rot13(str) { 
  var firstArray = [];
  var secondArray = [];
  
for(var i = 0; i < str.length; i++) {
  if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
    firstArray[i] = str.charCodeAt(i);
  } else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
    firstArray[i] = (str.charCodeAt(i)+13);
  } else {
    firstArray[i] = (str.charCodeAt(i)-13); 
  }
   
}
  for(var j = 0; j < firstArray.length; j++) {
    secondArray[j] = String.fromCharCode(firstArray[j]);
 }

 return secondArray.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");