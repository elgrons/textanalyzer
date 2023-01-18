// Business Logic

/* test 2
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

