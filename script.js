//scroll to products secyion when:
// "Shop Now"button is clicked
// function scrollToProducts(){
//    Document-getElementByid("products")scrollintoView({behavior:"smooth"});
// }

//Add items to simple cart (for now.just on alert)
// fuction addToCart(priductName)
// {
//    alert(productName+"has been addedyo your cart") 
// }

let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(productName + " has been added to your cart!");
}

function showAlert(productName) {
    alert("More information about " + productName + " coming soon!");
}
function myFunction(msg){
    }