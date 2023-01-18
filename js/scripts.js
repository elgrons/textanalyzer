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

// passes 3 tests: will return 0 if there is no input (err handling)
/* function wordCounter(text) {
  if(text.length === 0){
    return 0;
  }  
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}*/

// test 4: will .trim() unecessary white spaces
// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   const textArray = text.split(" ");
//   textArray.forEach(function(word) {
//     wordCount++;
//   });
//   return wordCount;
// }

// Test 5: built-in JavaScript Number() fx returns a number or NaN; if (NaN), we will increment our wordCount
// function wordCounter(text) {
//   if(text.trim().length === 0){
//     return 0;
//   }  
//   let wordCount = 0;
//   const textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     if( !Number(element) ){
//       wordCount++;
//     }
//   });
//   return wordCount;
// }

//Writing and Testing a Second Function for Text Analyzer

// how many times a word occurs in an empty string, should be 0 no matter what. 
function numberOfOccurrencesInText(word, text) {
  return 0;
}

