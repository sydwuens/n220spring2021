// link js to html
element.addEventListener("click", matchCard);

 // if else for if cards match, remove if not 

function matchCard(event){
  
  let response = event.target.getAttribute("data-number");
  event.target.innerHTML = response;

  for(let i = 0; i < response.length; i++){
    if((response[i] == "2") && (response[i] == "2")){
      event.target.innerHTML = response;
    //remove cards when they match
      event.target.remove();
    }
    else{
      event.target.style.backgroundColor = "#42f5ef";
    }
 
}

}
 
 //set timeout

   