/**
 * Seek and Destroy
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which removes the arguments provided from the initial array. 
 */

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); // converts arr into a real array
  args.splice(0,1); // removes 1 element at index 0, i.e. the array
  
  function checkElement(element) {
    return args.indexOf(element) === -1; // return if not found
  }
  
  return arr.filter(checkElement); // filters through array and returns the elements that aren't found
  
  }

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // example