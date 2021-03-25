let txtUserName = document.getElementById("txtUserName");

let dvResult = document.getElementById("dvResult");

function greetUser(){
  let helloUser = (txtUserName.value);

  let greetMe = (helloUser);

  dvResult.innerHTML = greetMe;
}