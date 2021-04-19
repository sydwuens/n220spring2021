let element = document.getElementById("indianaQuestions");

element.addEventListener("click", flashCard);


function flashCard(event){
  event.target.style.backgroundColor = "#9718";

//get the attribute 
let response = event.target.getAttribute("data-response");
event.target.innerHTML = response;

}
   