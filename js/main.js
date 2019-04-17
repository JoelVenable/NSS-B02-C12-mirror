function updateText(event) {
  const inputText = event.target.value;
    left = document.querySelector("#left"),
    right = document.querySelector("#right");
 
  left.innerHTML = inputText;
  right.innerHTML = inputText.split('').reverse().join('');

}


document.querySelector("#textInput")
  .addEventListener("keyup", (event) => updateText(event));