var cart = {};
var products = {
	Box1:5,
	Box2:5,
	Clothes1:5,
	Clothes2:5,
	Jeans:5,
	Keyboard:5,
	KeyboardCombo:5,
	Mice:5,
	PC1:5,
	PC2:5,
	PC3:5,
	Tent:5
};

var inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000);

function addToCart(productName) {
	if(products[productName] > 0){
		if(cart.hasOwnProperty(productName)){
				cart[productName] +=1; 
		} else{
				cart[productName] = 1;
		}
	console.log(cart);
	console.log(productName + " = " + cart[productName] + " in cart");
	products[productName] -=1;
	console.log(productName + " = " + products[productName] + " in products");
	console.log(inactiveTime)
	} else{
		alert("Sorry, " + productName + " is out of stock");
	}
	clearInterval(inactiveTime);
	inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000);
};

function removeFromCart(productName) {
		if(cart.hasOwnProperty(productName)){
			if(cart[productName] > 1){
				cart[productName] -= 1;
			} else if(cart[productName] == 1){
				console.log("inside ");
				delete cart[productName];
			}
			products[productName] +=1;
		} else{
			alert("This product does not exist in the cart");
		}
		console.log(cart);
		console.log(products);
		clearInterval(inactiveTime);
		inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000);
};

function showCart(){
	var output = "";
	for(var productName in cart){
		output+= productName + ": " + cart[productName] + "\n";
	}
	if(output == ""){
		alert("The cart is empty");
	}else{	
	alert(output);
	}
	clearInterval(inactiveTime);
	inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000);
};