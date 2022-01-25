var removeButtons = document.getElementsByClassName('remove-btn');
for(i=0; i<removeButtons.length; i++){
    var button = removeButtons[i];
    button.addEventListener('click', function(event){
       var buttonClicked = event.target;
       buttonClicked.parentElement.parentElement.remove()
       updateCartTotal()
    })
}
var cartInputs = document.getElementsByClassName('quantity-class')
for(i=0; i<cartInputs.length; i++){
    var input = cartInputs[i]
    input.addEventListener('change', quantityChange)
}
function quantityChange(event){
 var input = event.target
 if(isNaN(input.value)|| input.value <= 0){
     input.value = 1
 }
 updateCartTotal()
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-row')[0];
    var cartRow =cartItemContainer.getElementsByClassName('cart-item-tag')
    var total = 0
    for(i=0; i<cartRow.length; i++){
        var cartRows = cartRow[i]
        var priceElement = cartRows.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartRows.getElementsByClassName('quantity-class')
        [0]
        console.log(priceElement, quantityElement)
        var price = parseFloat(priceElement.innerText.replace("$"," "))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}