let element = document.getElementById("eventTest");

element.addEventListener("click", itsClicked);


function itsClicked(event){
  event.target.style.backgroundColor = "#991";
  event.target.style.height = "100px";
  event.target.style.width = "100px";

  //get the attribute 
let response = event.target.getAttribute("data-response");
event.target.innerHTML = response;

}