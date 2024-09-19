// console.log('button clickd filed add ');
// search:  form submit reloading the page 

// step - 1 set event handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // step-2: prevent dafauult vehabior (reloading browser)
//     event.preventDefault();  
//     console.log('login btn clicked');

//     // step-3: get the phone number
//     const phoneNumber =document.getElementById('phone-number').value;
//     const pinNumber =document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);
//     // step-4 validate phone and pin
// // this is temporary. you should do like this 
//     if(phoneNumber=== '5' && pinNumber= '1234'){
//         console.log('your are loddend in');
//         // setp -5: allow user to use the website
//     }
//     else{
//         alert('wrong number')
//     }
    
// })
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    //  get phone number add pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === '5' && pinNumber ==='1234'){
        console.log('your right number');
        // home page login way

        window.location.href = '../home.html'
        
    }
    else{
        alert('wrong number ')
    }
    

})