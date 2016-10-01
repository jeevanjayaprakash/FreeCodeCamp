/**
 * Repeat a string repeat a string 
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which repeats a string a number of times as specified by the user
 */
 
 function repeatStringNumTimes(str, num) {
 if(num < 0) {
   return "";
 } else {
  return str.repeat(num);
  }
}
