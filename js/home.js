console.log('button click')
// add money to account
// step-1:add a event handler to the add money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault()
    console.log('add money btn click')
    // step-2:get the money to be added the account
    const addMoneyInput =document.getElementById('add-money').value
    const pinNumberInput =document.getElementById('pin-number').value
    console.log(addMoneyInput, pinNumberInput);
    // step-3:verified pin
    if(pinNumberInput === '1234'){
        console.log('adding money')
        // step-4:current balance
        const balance =document.getElementById('acc-balance').innerText;
        
        //step-5: adding add moneyinput with balance
        const addMoneyNumber =parseFloat(addMoneyInput);
        const balanceNumber =parseFloat(balance)
        const newBalance =addMoneyNumber + balanceNumber
        
        //step-6: updating balance in the ui
        document.getElementById('acc-balance').innerText =newBalance;
        console.log(newBalance);

    }
    else{
        alert('failed to add money')
    }

})