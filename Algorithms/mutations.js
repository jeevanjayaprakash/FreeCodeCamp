/**
 * Mutations
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array. 
 */

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for (var i = 0; i < arr[1].length; i++) {
    if(arr[0].indexOf(arr[1][i], 0) < 0){
      return false;
    }
  }
  return true;
}
   
mutation(["hello", "hey"]); // example 