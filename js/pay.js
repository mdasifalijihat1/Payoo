// console.log('button clickd filed add ');
// search:  form submit reloading the page 

// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step-2: prevent dafauult vehabior (reloading browser)
    event.preventDefault();  
    console.log('login btn clicked');

    // step-3: get the phone number
    const phoneNumber =document.getElementById('phone-number').value;
    console.log(phoneNumber)
    
})