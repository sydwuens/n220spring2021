let txtCost = document.getElementById("txtCost");

let dvResult = document.getElementById("dvResult");

function calcTotal(){
    let customerBill = (txtCost.value);

    let totalTip = 0.2 * (customerBill);

    let finalTotal = "Total: $" + (totalTip) + (customerBill);

  
    

    dvResult.innerHTML = totalTip;

    dvResultTwo.innerHTML = finalTotal;
}