


document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const noakhaliDonateInput = getValueByInputFild('input-noakhali');
    const noakhaliBalance = getValueByTextFild('noakhali-balance');
    const userBalance = getValueByTextFild('user-balance');
    const upadatedNoakhaliBalance = noakhaliBalance + noakhaliDonateInput ;
    const updateUser = userBalance - noakhaliDonateInput;
    document.getElementById('noakhali-balance').innerText = upadatedNoakhaliBalance ;
    document.getElementById('user-balance').innerText = updateUser;
    alert(noakhaliDonateInput + " TK Donate for Flood at Noakhali, Bangladesh");
});
