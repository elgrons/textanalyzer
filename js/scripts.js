// Business Logic
/* test 1 if true, will return 1;
function wordCounter(word){
  return 1;
}
*/


/* test 2: added counter with .forEach() and will increment each time it's true;
function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}*/

// passes 3 tests
function wordCounter(text) {
  if(text.length === 0){
    return 0;
  }  
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}

