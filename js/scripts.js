function handleInput(event){
  event.preventDefault();

  console.log("Works");
  
  let inputArr = [];
  
  const inputOne = document.querySelector("input#input-1-id").value;
  const inputTwo = document.querySelector("input#input-2-id").value;
  const inputThree = document.querySelector("input#input-3-id").value;

  inputArr.push(inputOne, inputTwo, inputThree);

  console.log("input array: ", inputArr);

}

window.addEventListener("load", function(){
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleInput);
});