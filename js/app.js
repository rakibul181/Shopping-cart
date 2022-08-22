function updateProductNum(inputId, priceId, price,plus){
    const productNumField = document.getElementById(inputId)
    const productNumStr = productNumField.value
    const previousProductNum = parseInt(productNumStr)

    if(plus === true){
        const newProductNum  = previousProductNum + 1
        productNumField.value = newProductNum
        const totalProducPrice =  calculatePrice(newProductNum, priceId,price)


        currentsubTotal()
        
    }
    if(plus===false){ 
        if(previousProductNum>0){
            const newProductNum  = previousProductNum - 1
            productNumField.value = newProductNum
        
            calculatePrice(newProductNum, priceId,price)
            currentsubTotal()
        }
        else{
            alert("You Can't minus more")
        }
    }
    

       
}

function calculatePrice(newProductNum,priceId,price){
    const totalPrice = newProductNum * price
    const priceElement = document.getElementById(priceId)
    priceElement.innerText = totalPrice

    return totalPrice
}

function currentsubTotal(){
   const toatlPhnPrice = document.getElementById('phn-price')
   const totalCasePrice  = document.getElementById('case-price')

   const currentsubTotal = parseFloat(toatlPhnPrice.innerText) + parseFloat(totalCasePrice.innerText)
   const subTotal = document.getElementById('sub-total')
    subTotal.innerText = currentsubTotal

// tex
    const tex = document.getElementById('tex')
    const texAmount = (currentsubTotal * 0.01).toFixed(2)
    const textAmountNum = parseFloat(texAmount)
    tex.innerText = textAmountNum
//final-total
    const finalTotal = document.getElementById('final-total')
    const finalTotalPrice  = textAmountNum + currentsubTotal

    finalTotal.innerText = finalTotalPrice
   
}