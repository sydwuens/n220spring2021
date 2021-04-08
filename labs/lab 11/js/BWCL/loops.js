let txtSentence = document.getElementById("txtSentence");

let dvFound = document.getElementById("dvFound");

let badWords = [ "clear", "water", "tires"];

let statement = txtSentence.value;

letsplitStatement = statement.split(" "); 

function findBad(){

    let lookingFor = "clear";

    for(let i = 0; i < badWords.length; i++){
        if(badWords[i] == lookingFor){
            dvFound.innerHTML = "found it at " + i;
            break;
        }
    }

    var element = badWords.find(function (item){

        return item == "clear";
      })
    
      console.log(element);
}