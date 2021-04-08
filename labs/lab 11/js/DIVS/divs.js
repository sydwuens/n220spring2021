let txtExample = document.getElementById("txtExample");

let dvFound = document.getElementById("dvFound");

let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#FF0000", height: 300, width: 100 },
   
   ];

   function displayDivs(){

    for(var i = 0; i < objects.length; i++) {
      let newEl = document.createElement("div");
      newEl.innerHTML += "Color: " + objects[i].color + " Height: " +  objects[i].height + " Width: " + objects[i].width;
      dvFound.appendChild(newEl);
    }
}
   