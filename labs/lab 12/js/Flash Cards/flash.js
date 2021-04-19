// link js to html
let element = document.getElementById("indianaQuestions");

// listen for click
element.addEventListener("click", flashCard);

// answer the quesiton on the click
function flashCard(event){
  event.target.style.backgroundColor = "#9718";

//get the attribute 
let response = event.target.getAttribute("data-response");
event.target.innerHTML = response;

}
   