/**
 * Confirm the ending
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which checks if the first argument ends with second argument
 */
 
 function confirmEnding(str, target) {
  var strLength = str.length;
  var targetLength = target.length;
  var wanted = str.substr((strLength - targetLength), targetLength);
  if(target == wanted) {
    return true;
  } else {
    return false;
  }
}
