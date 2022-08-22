/// case
document.getElementById('btn-case-plus').addEventListener('click',function(){
    updateProductNum('case-num-field','case-price',59,true)
    

})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    updateProductNum('case-num-field','case-price',59,false)
})

// phone
document.getElementById('phn-plus').addEventListener('click',function(){
    updateProductNum('phn-input','phn-price',1219,true)
    
})
document.getElementById('phn-minus').addEventListener('click',function(){
    updateProductNum('phn-input','phn-price',1219,false)
    
})
