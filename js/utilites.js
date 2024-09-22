//function for get value using value 
function getValueByInputFild (id){
document.getElementById(id).addEventListener('click',function(event){
    const result = event.target.value ;
    resultNumber = parseFloat(result);
    return resultNumber ;
});
}

/// function for get value using innerText 
function getValueByTextFild (id){
    document.getElementById(id).addEventListener('click',function(event){
        const result = event.target.innerText ;
        resultNumber = parseFloat(result);
        return resultNumber ;
    });
    }