// link js to html
element.addEventListener("click", matchCard);
element.addEventListener("click", checkMatch);

 // decipher between click 1 and click 2
function matchCard(event){
  
  let variableCard1 = event.target.getAttribute("data-cell-index");

  let variableCard2 = event.target.getAttribute("data-cell-index");
  
  let response = event.target.getAttribute("data-cell-index")
    event.target.innerHTML = response;
}

//compare the two clicks
function checkMatch(event){
    if(getdatacellindex.value == getdatacellindex.value){
    //remove cards if they match
      event.target.remove();
    }
    else{
      //setTimeout if they don't match
      setTimeout(() => {
      event.target.style.backgroundcolor = bisque;
      
    }, 500);
    }
  }


   