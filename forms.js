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

var addToCart = document.getElementsByClassName('add-to-cart');
for(i=0; i<addToCart.length; i++) {
    var button = addToCart[i];
    button.addEventListener('click', addToCartClick);
}
function addToCartClick(event){
     var button = event.target
     var shopItem = button.parentElement.parentElement
     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
     var img = shopItem.getElementsByClassName('shop-item-img')[0].src;
     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
     addItemtoCartMethod(title,price,img);
   
} 
function addItemtoCartMethod(title, price, img){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContent = `<div class="cart-items> 
     <div class="cart-item">
        <img width="70px" height="70px" src=${img} alt="">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-item-price">${price}</span>
    <div class="cart-item-quantity">
        <input type="number" name="quantity" class="quantity-class" value="1">
        <button class="remove-btn" type="button">remove</button>
    </div>
</div>
</div>`;
console.log(cartItems)
cartRowContent.innerHTML = cartRow;
    cartRow.append(cartItems)
 }

 var purchace = document.getElementById('purchase')
 purchace.addEventListener('click', purchaseClick)
 function purchaseClick(){
    alert('thanks for your purchase')
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