/**
 * Falsy Bouncer 
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which removes all falsy values from an array.
 */

function bouncer(arr) {
  var filtered = [];
  
  function falseBoolean(element) {
  var x = Boolean("false");
    if(x) {
      return element;
    }
  }
  
  filtered = arr.filter(falseBoolean);
  return filtered;
}

bouncer([7, "ate", "", false, 9]); // example