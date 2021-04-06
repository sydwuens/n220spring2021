let txtExample = document.getElementById("txtExample");

let dvFound = document.getElementById("dvFound");


let fakeSocial = [
  { name: "Max", update: "Today is 2 cool"},
  { name: "Sarah", update: "Getting crepes today!"},
  { name: "Aaron", update: "Stressed about class :|"},
  { name: "Max", update: "Oh no I lied"},

]

function findInsta(){

    for(var i = 0; i < fakeSocial.length; i++) {
      let newEl = document.createElement("div");
      newEl.innerHTML += fakeSocial[i].name + ": " + fakeSocial[i].update;
      dvFound.appendChild(newEl);
    }
}






/*
Example 1
useful for homeword goes inside onclick button
let sentence = txtExample.value;

console.log(sentence);

let splitSentence = sentence.split("  ");
console.log(splitSentence);

Example 2 - summation and condension 
function calcScores(){

  var stringVals = txtExample.value;

  let myArray = stringVals.split(",");


  // reduce array
  let sum = 0;

  for (let i=0; i < myArray.length; i++){
    sum += Number(myArray[i]);
  }

  console.log(sum);

  Example 3

  let lookingFor = "Instagram";

  for (let i = 0; i < socialNetworks.length; i++){
   if(socialNetworks[i].toUpperCase()== lookingFor.toUpperCase()){
     dvFound.innerHTML = ("found it at " + i);
     break;
   }
  }

    var element = socialNetworks.find(function (item){

    return item == "Instagram";
  })

  console.log(element);

*/