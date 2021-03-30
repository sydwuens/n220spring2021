let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";
dvCoin.style.backgroundColor = "#ebcf34";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin (){
  let flip = Math.random();
  let side = "heads";
  if (flip > .5) side = "tails";
  dvCoin.innerHTML = side;

  if( side == "tails"){
    dvCoin.style.backgroundColor = "#eb5634";
  } else{
    dvCoin.style.backgroundColor = "#ebcf34"
  }
}