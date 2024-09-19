// add money to the account
// s-1: add event handler
// prevent page reload after form submit 
// s-2: get mone to be added to the account balance


// step-1: add an event handler to the add money button inside the form 
document.getElementById('btn-add-money')
  .addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
 
    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    //  get the pin number 
    const pinNumberInput = document.getElementById('pin-Number').value;
    console.log(pinNumberInput)
     
    //   step-3 verify pin number

    if(pinNumberInput === '1234'){
            console.log('adding to the money')


             // step-4 balance add 
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance)

    // step-5: add addmonetnput with balance
    const addmoneNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBlance = addmoneNumber + balanceNumber;
    console.log(newBlance)

    //  step-6:  update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBlance;

    }        
    else{
        alert('wrong pin')
    }

  })