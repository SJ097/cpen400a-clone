var cart = {};
var totalPrice = 0;
/* var products = {
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
}; */


var Product = function(name, price, imageUrl){
	this.name = name;
	this.price = price;
	this.imageUrl = imageUrl;
};

Product.prototype.computeNetPrice = function(quantity){
	return (this.price*quantity);
};

var products = {
	Box1:{
		product: new Product("Box1",10,"Images\Box1_$10.png"),
		quantity: 5
	},
	Box2:{
		product: new Product("Box2",5,"Images\Box2_$5.png"),
		quantity: 5
	},
	Clothes1:{
		product: new Product("Clothes1",20,"Images\Clothes1_$20.png"),
		quantity: 5
	},
	Clothes2:{
		product: new Product("Clothes2",30,"Images\Clothes2_$30.png"),
		quantity: 5
	},
	Jeans:{
		product: new Product("Jeans",50,"Images\Jeans_$50.png"),
		quantity: 5
	},
	Keyboard:{
		product: new Product("Keyboard",20,"Images\Keyboard_$20.png"),
		quantity: 5
	},
	KeyboardCombo:{
		product: new Product("KeyboardCombo",40,"Images\KeyboardCombo_$40.png"),
		quantity: 5
	},
	Mice:{
		product: new Product("Mice",20,"Images\Mice_$20.png"),
		quantity: 5
	},
	PC1:{
		product: new Product("PC1",350,"Images\PC1_$350.png"),
		quantity: 5
	},
	PC2:{
		product: new Product("PC2",400,"Images\PC2_$400.png"),
		quantity: 5
	},
	PC3:{
		product: new Product("PC3",300,"Images\PC3_$300.png"),
		quantity: 5
	},
	Tent:{
		product: new Product("Tent",100,"Images\Tent_$100.png"),
		quantity: 5
	},
	
};

//var inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000);

function addToCart(productName) {
	if(products[productName].quantity > 0){
		if(cart.hasOwnProperty(productName)){
				cart[productName] +=1; 
		} else{
				cart[productName] = 1;
		}
	/* console.log(cart);
	console.log(cart[productName]); */
	/* console.log(productName + " = " + cart[productName] + " in cart"); */
	products[productName].quantity -=1;
	console.log((products[productName].product.name) + " added");
	console.log("Price of " + products[productName].product.name + " is " + products[productName].product.price);
	console.log("Quantity of " +products[productName].product.name + " in cart is " + cart[productName])
	//console.log(products[productName].quantity);
	totalPrice += products[productName].product.price;
	console.log(totalPrice);
	/* console.log(productName + " = " + products[productName] + " in products");
	console.log(inactiveTime) */
	} else{
		alert("Sorry, " + productName + " is out of stock");
	}
	/* clearInterval(inactiveTime);
	inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000); */
};

function removeFromCart(productName) {
		if(cart.hasOwnProperty(productName)){
			if(cart[productName] > 1){
				cart[productName] -= 1;
			} else if(cart[productName] == 1){
				//console.log("inside ");
				delete cart[productName];
			}
			products[productName].quantity +=1;
			totalPrice -= products[productName].product.price;
			console.log(totalPrice);
		} else{
			alert("This product does not exist in the cart");
		}
		console.log(cart);
		console.log("Quantity Remaining Of " +products[productName].product.name + " " +products[productName].quantity);
		/* clearInterval(inactiveTime);
		inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000); */
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
	/* clearInterval(inactiveTime);
	inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000); */
};

///////////////////////////////////////Assignment 3 starts //////////////////////////////////////////////////////////////////////////////

/* var box1 = new Product('Box1', 10, 'Images\Box1_$10.png');
console.log( box1.name ); // Should print "Box1" to the console.
console.log( box1.computeNetPrice(5) ); // Should print '50' to the console. */