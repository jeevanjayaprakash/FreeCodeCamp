/**
 * Reverses a string
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which reverses a string provided by the user
 */
 
 function reverseString(str) {
  var input = str;
  var array = [];
  array = input.split("");
  var reverseArray = [];
  reverseArray = array.reverse();
  var returnStr = reverseArray.join("");
  return returnStr;
}
