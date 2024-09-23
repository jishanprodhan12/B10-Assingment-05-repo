


document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const noakhaliDonateInput = getValueByInputFild('input-noakhali');
    const noakhaliBalance = getValueByTextFild('noakhali-balance');
    const upadatedNoakhaliBalance = noakhaliBalance + noakhaliDonateInput ;
    document.getElementById('noakhali-balance').innerText = upadatedNoakhaliBalance ;

});
