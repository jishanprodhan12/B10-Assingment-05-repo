

//for noakhali 
document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const noakhaliDonateInput = getValueByInputFild('input-noakhali');
    const noakhaliBalance = getValueByTextFild('noakhali-balance');
    const userBalance = getValueByTextFild('user-balance');
    const upadatedNoakhaliBalance = noakhaliBalance + noakhaliDonateInput ;
    const updateUser = userBalance - noakhaliDonateInput;
    document.getElementById('noakhali-balance').innerText = upadatedNoakhaliBalance ;
    document.getElementById('user-balance').innerText = updateUser;
    document.getElementById('input-noakhali').value = '';
    alert(noakhaliDonateInput + " TK Donate for Flood at Noakhali, Bangladesh");
    
});
//for feni 

document.getElementById('feni-donate-btn').addEventListener('click',function(){
   const feniDonateInput = getValueByInputFild('input-feni');
   const feniBalance = getValueByTextFild('feni-balance');
   const userBalance = getValueByTextFild('user-balance');
   const updateFeniBalance = feniBalance + feniDonateInput ;
   const updateUser = userBalance - feniDonateInput;
   document.getElementById('user-balance').innerText=updateUser;
   document.getElementById('feni-balance').innerText=updateFeniBalance ;
   document.getElementById('input-feni').value = '';
   alert(feniDonateInput + " TK Donate for Flood Relief in Feni,Bangladesh");

});

// for qouta 

document.getElementById('qouta-donate-btn').addEventListener('click',function(){
    const qoutaDonateInput = getValueByInputFild('input-qouta');
    const qoutaBalance = getValueByTextFild('quota-balance');
    const userBalance = getValueByTextFild('user-balance');
   const updateQoutaBalance = qoutaBalance + qoutaDonateInput ;
   console.log(updateQoutaBalance);
   const updateUserBalance = userBalance - qoutaDonateInput ;
  document.getElementById('user-balance').innerText= updateUserBalance;
  document.getElementById('quota-balance').innerText= updateQoutaBalance;
  document.getElementById('input-qouta').innerText='';

   alert(qoutaDonateInput + " TK Donate for Injured in the Quota Movement");


});