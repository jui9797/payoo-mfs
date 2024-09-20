document.getElementById('btn-cash-out').addEventListener('click', function(e){
    e.preventDefault();
    const cashOut =document.getElementById('input-cash-out').value
    const cashOutNumber =parseFloat(cashOut);
    const pinNumber =document.getElementById('cashout-pin').value
    if(pinNumber === '1234'){
        const balance =document.getElementById('acc-balance').innerText
        const balanceNumber =parseFloat(balance);
        const newbalance =balanceNumber-cashOutNumber
        document.getElementById('acc-balance').innerText =newbalance;
        
    }

})