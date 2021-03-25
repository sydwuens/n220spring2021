let txtCost = document.getElementById("txtCost");

let dvResult = document.getElementById("dvResult");

function calcTotal(){

    //user cost input
    let customerBill = Number(txtCost.value);

    // calculation from user tip
    let totalTip = (0.21 * (customerBill));

    //combine tip and total
    let finalTotal = ((totalTip) + (customerBill));

    //output tip result to user
    dvResult.innerHTML = "Tip: $" + totalTip;

    //output total cost result to user
    dvResultTwo.innerHTML = "Total: $" + finalTotal;
}