// for donation btn 
document.getElementById('donation-btn').addEventListener('click',function(){
    // toggle style start here 
    document.getElementById('donation-btn').classList.add("bg-primary-color" , "text-black" , );
    document.getElementById('history-btn').classList.add('btn-outline');
    document.getElementById('history-btn').classList.remove("bg-primary-color");
    // toggle style end here 
    document.getElementById('history-card-container').classList.add("hidden");
    document.getElementById('donate-card-contianer').classList.remove("hidden");
});
document.getElementById('history-btn').addEventListener('click',function(){
    // toggle style start here 
    document.getElementById('history-btn').classList.add("bg-primary-color" , "text-black");
    document.getElementById('donation-btn').classList.add("btn-outline","text-gray-500");
    document.getElementById('donation-btn').classList.remove("bg-primary-color");
    // toggle style end here 
    document.getElementById('donate-card-contianer').classList.add("hidden");
    document.getElementById('history-card-container').classList.remove("hidden");

});

//for noakhali 
document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const noakhaliDonateInput = getValueByInputFild('input-noakhali');
    if(noakhaliDonateInput < 0 || isNaN(noakhaliDonateInput)){
        alert("invalid input ");
        document.getElementById('input-noakhali').value = '';
        return ;
    }
    
    const noakhaliBalance = getValueByTextFild('noakhali-balance');
    const userBalance = getValueByTextFild('user-balance');
    if(userBalance < noakhaliDonateInput){
        alert("Your don't have enough taka for donation");
        document.getElementById('input-noakhali').value = '';
        return;
    }
    const upadatedNoakhaliBalance = noakhaliBalance + noakhaliDonateInput ;
    const updateUser = userBalance - noakhaliDonateInput;
    document.getElementById('noakhali-balance').innerText = upadatedNoakhaliBalance ;
    document.getElementById('user-balance').innerText = updateUser;
    document.getElementById('input-noakhali').value = '';
    alert(noakhaliDonateInput + " TK Donate for Flood at Noakhali, Bangladesh");
    // dyamic history noakhali
    const historyContainer = document.getElementById('history-card-container');
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="w-11/12 mx-auto shadow-sm rounded-lg py-3 px-5 space-y-3 border-2 my-3">
                <h4 class=" font-bold">${noakhaliDonateInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
                <p class="text-sm text-gray-400">${ new Date().toString('en-GB')}</p>
            </div>
    `
    historyContainer.appendChild(div);
    if(typeof noakhaliDonateInput === 'number'){
        document.getElementById('no-donation-history').classList.add('hidden');
    }
});
//for feni 

document.getElementById('feni-donate-btn').addEventListener('click',function(){
   const feniDonateInput = getValueByInputFild('input-feni');
        if(feniDonateInput < 0 || isNaN(feniDonateInput)){
    alert("invalid input ");
    document.getElementById('input-feni').value = '';
    return ;
    }

   const feniBalance = getValueByTextFild('feni-balance');
   const userBalance = getValueByTextFild('user-balance');
        if(userBalance < feniDonateInput){
    alert("Your don't have enough taka for donation");
    document.getElementById('input-feni').value = '';
    return;
    }
   const updateFeniBalance = feniBalance + feniDonateInput ;
   const updateUser = userBalance - feniDonateInput;
   document.getElementById('user-balance').innerText=updateUser;
   document.getElementById('feni-balance').innerText=updateFeniBalance ;
   document.getElementById('input-feni').value = '';
   alert(feniDonateInput + " TK Donate for Flood Relief in Feni,Bangladesh");
        // dyamic history feni
        const historyContainer = document.getElementById('history-card-container');
        const div = document.createElement('div');
        div.innerHTML = `
                         <div class="w-11/12 mx-auto shadow-sm rounded-lg py-3 px-5 space-y-3 border-2 my-3">
                         <h4 class=" font-bold">${feniDonateInput} Taka is Donated for famine-2024 at feni, Bangladesh</h4>
                         <p class="text-sm text-gray-400">${ new Date().toString('en-GB')}</p>
                         </div>
                       `
         historyContainer.appendChild(div);
            if(typeof feniDonateInput === 'number'){
                document.getElementById('no-donation-history').classList.add('hidden');
            }
        
});

// for qouta 

document.getElementById('qouta-donate-btn').addEventListener('click',function(){
    const qoutaDonateInput = getValueByInputFild('input-qouta');
    if(qoutaDonateInput < 0 || isNaN(qoutaDonateInput)){
        alert("invalid input ");
        document.getElementById('input-qouta').value = '';
        return ;
    }
    const qoutaBalance = getValueByTextFild('quota-balance');
    const userBalance = getValueByTextFild('user-balance');
    if(userBalance < qoutaDonateInput){
        alert("Your don't have enough taka for donation");
        document.getElementById('input-qouta').value = '';
        return;
        }
   const updateQoutaBalance = qoutaBalance + qoutaDonateInput ;
   console.log(updateQoutaBalance);
   const updateUserBalance = userBalance - qoutaDonateInput ;
  document.getElementById('user-balance').innerText= updateUserBalance;
  document.getElementById('quota-balance').innerText= updateQoutaBalance;
  document.getElementById('input-qouta').innerText='';

   alert(qoutaDonateInput + " TK Donate for Injured in the Quota Movement");
        // dyamic history noakhali
        const historyContainer = document.getElementById('history-card-container');
        const div = document.createElement('div');
        div.innerHTML = `
                         <div class="w-11/12 mx-auto shadow-sm rounded-lg py-3 px-5 space-y-3 border-2 my-3">
                         <h4 class=" font-bold">${qoutaDonateInput} Taka is Donated for  Injured in the Quota Movement, Bangladesh</h4>
                         <p class="text-sm text-gray-400">${ new Date().toString('en-GB')}</p>
                         </div>
                       `
        historyContainer.appendChild(div);
        if(typeof qoutaDonateInput === 'number'){
            document.getElementById('no-donation-history').classList.add('hidden');
        }
        

});