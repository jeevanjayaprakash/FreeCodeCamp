/**
 * Title case a sentence
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which title cases a string provided by the user
 */
 
 function titleCase(str) {
  var input = str.toLowerCase();
  return input.replace(/(\s|^)[a-z]/g, function(letter) {
  return letter.toUpperCase(); 
  });
}
