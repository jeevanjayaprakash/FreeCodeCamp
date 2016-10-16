/**
 * Where do I belong?
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which returns the lowest index at which a value (the second argument) should be inserted into an array (first argument) once the initial array has been sorted. 
 */

//logic: push num to array, sort array, search for num in array, return position of num in array

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
  return a - b;
});
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50); // example