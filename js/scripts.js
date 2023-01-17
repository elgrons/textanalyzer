function handleInput(event){
  event.preventDefault();

  console.log("Works");
  
  let inputArr = [];
  
  // const inputOne = document.querySelector("input#input-1-id").value;
  const inputOne = document.getElementById("input-1-id").value;
  const inputTwo = document.getElementById("input-2-id").value;
  const inputThree = document.getElementById("input-3-id").value;

  inputArr.push(inputOne, inputTwo, inputThree);

  console.log("input array: ", inputArr);

  let favThings = [];
  // let favIndex1 = 
  favThings.push(inputArr[1]);
  favThings.push(inputArr[0]);
  favThings.push(inputArr[2]);
  console.log("favThings", favThings);
  let favArr0 = favThings[0];
  let favArr1 = favThings[1];
  let favArr2 = favThings[2];
  let div = document.createElement("div");
  document.querySelector("form").append(div);

  let ul = document.createElement("ul");
  div.append(ul);


  // Best Guess:  These had to be entered in line item order; 
  let liOne = document.createElement("li");
  liOne.append(favArr0); // favThings[0]);
  ul.append(liOne);

  let liTwo = document.createElement("li");
  liTwo.append(favArr1); //favThings[1]); //favIndex1); //
  ul.append(liTwo);
  console.log(liTwo, "liTwo");
  console.log("favThings[1]", favThings[1]);
  // console.log("favIndex1", favIndex1);

  let liThree = document.createElement("li");
  liThree.append(favArr2); // favThings[2]);
  ul.append(liThree);

}

window.addEventListener("load", function(){
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleInput);
});

//will need new code to connect input, creating new list in html