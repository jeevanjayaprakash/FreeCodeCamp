/**
 * Returns the largest numbers in array
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which returns an array of the largest numbers from a two-dimensional array. Originally desesigned to work with a 
 two-dimensional array with exactly 4 sub arrays
 */
 
 function largestOfFour(arr) {
  var array = [];
  var sortedArray = [];
  for(var i = 0; i < arr.length; i++) {
    array[i] = arr[i];
  }
  for(var j = 0; j < array.length; j++) {
    array[j].sort(function(a,b) {
  return b - a;
});
    sortedArray[j] = array[j][0];
  }
  return sortedArray;
}
