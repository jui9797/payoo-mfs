// console.log('hello from js')


// document.getElementById('btn-login').addEventListener('click', function)

// step-1 adding addEventListener
document.getElementById('btn-login').addEventListener('click', function(event){

    // step-2 add event.preventDefault
    event.preventDefault()
    console.log('button clicked')

    // step-3 get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber =document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // step-4 valided phone and pin
    if(phoneNumber === '5' && pinNumber === '1234'){
        window.location.href ='/home.html';
        console.log('you are logged in')
    }
    else{
        alert('wrong number')
    }
})