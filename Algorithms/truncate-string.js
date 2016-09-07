/**
 * Truncate a string
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which truncates the first argument if it is longer than the second argument
 */
 
 function truncateString(str, num) {
  if(num <= 3) {
    var lessThanThree = str.slice(0,num);
    lessThanThree += "...";
    return lessThanThree;
  } else if (num >= str.length) {
    return str;
  } else {
    var moreThanThree = str.slice(0,(num-3));
    moreThanThree += "...";
    return moreThanThree;
  }
}
