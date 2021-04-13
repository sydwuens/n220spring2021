//links html to js
let txtSentence = document.getElementById("txtSentence");

let dvFound = document.getElementById("dvFound");

// let statement = txtSentence.value;

badtotal = 0;

function findBad(){
    // gets all of the input in an array
    let splitStatement = txtSentence.value.split(" "); 
    console.log(splitStatement);

    //loop through to check for bad words
    for(let i = 0; i < splitStatement.length; i++){
        if(splitStatement[i] == "clear"){
            badtotal = badtotal + 1;
        }
        else if (splitStatement[i] == "water") {
            badtotal += 1;
        }
        else if (splitStatement[i] == "tires") {
            badtotal += 1;
        }
        console.log(badtotal);
    }
    //shows user the total bad words
    dvFound.innerHTML = "Bad Words Found: " + badtotal;
    dvFoundTwo.innerHTML = "Word Total: " + splitStatement.length;


    //resets the totals for the next entry
    badtotal = 0;
    splitStatement.length = 0;
    document.getElementById('txtSentence').value='';


    // var element = badWords.find(function (item){

    //     return item == "clear";
    //   })
    
    //   console.log(element);
}