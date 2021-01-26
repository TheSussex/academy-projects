let balanceLeft = 6000;
let amountToBeWithdrawn = prompt("Please enter how much you'll like to withdraw")

function doWithdraw(balance = 5000, amount = 20000) {
    if (amount > balance) return alert("Not enough money");
    return balance - amount;
}

balanceLeft = doWithdraw(balanceLeft, amountToBeWithdrawn);
alert(balanceLeft);