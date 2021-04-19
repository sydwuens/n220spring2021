//links index and js
let mySquare = document.getElementById ("mySquare");

//make 3 squares
    let newEn = document.createElement ("div");

    //styles squares
    newEn.style.width = "200px";
    newEn.style.height = "200px";
    newEn.style.backgroundColor = "#70706e";
    newEn.style.margin = "5px";
    newEn.style.float = "left";

    //makes squares visible on page
    mySquare.appendChild(newEn);

    newEn.addEventListener("div", changeColor);


function changeColor(event){
  event.target.style.backgroundColor = "#994";
  
  }

  let newEl = document.createElement ("hi");

    //styles squares
    newEl.style.width = "20px";
    newEl.style.height = "20px";
    newEl.style.backgroundColor = "#70706e";
    newEl.style.margin = "5px";
    newEl.style.float = "left";

    //makes squares visible on page
    mySquare.appendChild(newEn);

    newEl.addEventListener("hi", changeColorTwo);


function changeColorTwo(event){
  event.target.style.backgroundColor = "#ff0000";
  
  }

  //#ff0000 #15ff00 #0800ff