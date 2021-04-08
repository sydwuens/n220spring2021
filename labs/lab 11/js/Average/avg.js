let txtExample = document.getElementById("txtExample");

let dvFound = document.getElementById("dvFound");

function calcScores(){

    //takes in a list of comma-separated numbers from the user
    var stringVals = txtExample.value;
  
    //splits that list into an array of numbers
    let myArray = stringVals.split(",");
  
  
    // reduce array
    let sum = 0;
    let avg = 0;
  
    //calc sum and averages
    for (let i=0; i < myArray.length; i++){
      sum += Number(myArray[i]);
      avg = sum / myArray.length;
    }
  
    console.log(sum);
    console.log(avg);

    //display sum and averages to user
    dvResult.innerHTML = "Sum: " + sum;
    dvResultTwo.innerHTML = "Average: " + avg;

    //Remove the text from the input to allow for new numbers

    document.getElementById('txtExample').value='';
}