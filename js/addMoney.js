document.getElementById("btn-addMoney").addEventListener("click", function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    
    if(accountNumber.length === 11){
        if(convertedPin ===1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else{
            alert("Invalid PIN")
        }
    }
    else{
        alert("Invalid Account Number")
    }
    console.log(amount)
    
})