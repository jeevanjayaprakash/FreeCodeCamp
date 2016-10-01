/**
 * Find the longest word in a string
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which finds the longest word in a string and returns the length of that string.
 */
 
 function findLongestWord(str) {
  var sentence = str;
  var array = sentence.split(" ");
  var returnLength = array.map(function(str){
  return str.length;
  });
  returnLength.sort(function(a,b){
    return b - a;
  });
  return returnLength[0];
}
