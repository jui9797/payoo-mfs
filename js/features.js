// show the cashout form
document.getElementById('btn-show-cashout').addEventListener('click', function(){
    // show the cashout btn clicked
    console.log('show cashout button')
    document.getElementById('cashout-form').classList.remove('hidden');
    // hide the addmoney form
    document.getElementById('addmoney-form').classList.add('hidden')
})


// show addmoney form
document.getElementById('btn-show-addmoney').addEventListener('click', function(){
    // show the add money btn clicked
    console.log('show add moneybtn clicked')
    document.getElementById('addmoney-form').classList.remove('hidden')
    // hide the cashout form
    document.getElementById('cashout-form').classList.add('hidden');
})