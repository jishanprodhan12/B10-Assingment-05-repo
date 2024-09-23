//function for get value using value 
function getValueByInputFild (id){
    const result = document.getElementById(id).value ;
    resultNumber = parseFloat(result);
    return resultNumber ;
}

/// function for get value using innerText 
function getValueByTextFild (id){
    const result = document.getElementById(id).innerText ;
    resultNumber = parseFloat(result);
    return resultNumber ;
}

