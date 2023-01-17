function handleInput(event){
  event.preventDefault();

  console.log("Works");
  
  let inputArr = [];
  
  const inputOne = document.querySelector("input#input-1-id").value;
  const inputTwo = document.querySelector("input#input-2-id").value;
  const inputThree = document.querySelector("input#input-3-id").value;

  inputArr.push(inputOne, inputTwo, inputThree);

  console.log("input array: ", inputArr);

  let favThings = [];
  favThings.push(inputArr[1]);
  favThings.push(inputArr[0]);
  favThings.push(inputArr[2]);
  console.log("favThings", favThings);
  
  let div = document.createElement("div");
  document.querySelector("form").append(div);

  let ul = document.createElement("ul");
  div.append(ul);

  let liOne = document.createElement("li");
  liOne.append(favThings[1]);
  ul.append(liOne);

  

}

window.addEventListener("load", function(){
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleInput);
});

//will need new code to connect input, creating new list in html