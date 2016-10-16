/**
 * Slasher Flick
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which returns the remaining elements of an array after chopping off n elements from the beginning of the array. 
 */

 function slasher(arr, howMany) {
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2); // example