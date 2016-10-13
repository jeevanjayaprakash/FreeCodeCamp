/**
 * Chunky Monkey
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which splits an array (first argument) into groups the size (second argument) and returns them as a two-dimensional array. 
 */
 
function chunkArrayInGroups(arr, size) {
  newArray = [];
  var numOfArrays = Math.ceil(arr.length/size);
  var start = 0;
  var end = size;
  
  for(var i = 0; i < numOfArrays; i++) {
  newArray[i] = arr.slice(start, end);
  start += size;
  end += size; // if end exceeds arr.length then end = array.length
  }
  
  return newArray;
}
