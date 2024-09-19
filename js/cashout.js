document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out clicked')
    const cashOut = document.getElementById('cash-out-amount').value;
    const cashOutNumber =parseFloat(cashOut);
    const PinNumber =document.getElementById('cash-out-pin').value;
    console.log(cashOut, PinNumber)

    // wrong way to verify pin number
    if(PinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        
        const balanceNumber =parseFloat(balance);
        
        // reduce the blacne

        const newBlance = balanceNumber - cashOutNumber;

        // update the ui
        document.getElementById('account-balance').innerText = newBlance;

    }
    else{
        alert('wrong pin')
    }

})