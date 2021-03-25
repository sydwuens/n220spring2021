let txtUserName = document.getElementById("txtUserName");

let txtPassword = document.getElementById("txtPassword");

let dvResult = document.getElementById("dvResult");

function tryIt(){

    if( (txtUserName.value == "Username") && (txtPassword.value == "Password") ) {


    dvResult.innerHTML = "Success";

    }

    else {
    dvResult.innerHTML = "Wrong Informtion";
   
    }


}