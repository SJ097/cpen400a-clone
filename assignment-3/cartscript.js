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

var flag = 0;

function inactiveTime() {
	var footer = document.getElementById('timer');
	var number = footer.innerHTML;
	if (number == 0 && flag == 0) {
		alert("Hey there! Are you still planning to buy something?");
		flag = 1;
	}
	if (number > 0) {
		number--;
	}
	footer.innerHTML = number;
}

setInterval(inactiveTime, 1000);

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

var keys = [];
for(var k in products){ 
	keys.push(k);
}
console.log(keys);
/* window.onload = function(){
var keys = [];
for(var k in products){ 
	keys.push(k);
}
console.log(keys);

var x = document.getElementsByClassName("removeButton");
for(var i =0; i<x.length; i++){
	console.log("inside");
	x[keys[i]] = x[i];
	delete x[i];
	console.log(x);
};
}; */
/* for(var i=0; i<x.length; i++){
console.log("inside");
x[keys[i]] = x[i];
//console.log(x[i]);
delete x[i];
			//console.log(x[i]);
} */

//alert("total " + keys.length + " keys: " + keys);

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
	document.getElementById("showCart").textContent = "Cart ($" + totalPrice + ")"; 
	var x = document.getElementsByClassName("removeButton");
	for(var i =0; i<x.length; i++){
		//console.log("inside");
		x[keys[i]] = x[i];
		delete x[i];
		//console.log(x);
	};
	
	var y = document.getElementsByClassName("addButton");
	for(var i =0; i<y.length; i++){
		console.log("inside");
		y[keys[i]] = y[i];
		delete y[i];
		//console.log(x);
	};
		
	if(cart[productName]>0){
		console.log(x);
		x[productName].style.display = "flex";

	}
	
	if(products[productName].quantity == 0){
		console.log(y);
		y[productName].style.display = "none";

	}
	
	var t= document.getElementById("cartTable");
	/* console.log(productName + " = " + products[productName] + " in products");
	console.log(inactiveTime) */
	}
		var footer = document.getElementById('timer');
	footer.innerHTML = 300;
	flag = 0;
	/* else{
		alert("Sorry, " + productName + " is out of stock");
	} */
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
		    document.getElementById("showCart").textContent = "Cart ($" + totalPrice + ")";
			
			var x = document.getElementsByClassName("removeButton");
			for(var i =0; i<x.length; i++){
				//console.log("inside");
				x[keys[i]] = x[i];
				delete x[i];
				//console.log(x);
			};
	
	var y = document.getElementsByClassName("addButton");
		for(var i =0; i<y.length; i++){
			console.log("inside");
			y[keys[i]] = y[i];
			delete y[i];
			//console.log(x);
		};
		
	if(!(cart.hasOwnProperty(productName))){
		//console.log(x);
		//console.log("inside");
		x[productName].style.display = "none";

	}
	
	if(products[productName].quantity > 0){
		//console.log(y);
		y[productName].style.display = "flex";

	}
		} /* else{
			alert("This product does not exist in the cart");
		} */
		console.log(cart);
		console.log("Quantity Remaining Of " +products[productName].product.name + " " +products[productName].quantity);
		
			var footer = document.getElementById('timer');
			footer.innerHTML = 300;
			flag = 0;
		/* clearInterval(inactiveTime);
		inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000); */
};

function showCart(){
	var output = "";
	var i = 1;
	for(var productName in products){
		if (cart.hasOwnProperty(productName)) {
		document.getElementById(i+"name").innerHTML = productName;
		document.getElementById(i+"quantity").innerHTML = cart[productName];
		document.getElementById(i+"price").innerHTML = products[productName].product.computeNetPrice(cart[productName]);
		i++;
		}
		else {
		document.getElementById(i+"name").innerHTML = "";
		document.getElementById(i+"quantity").innerHTML = "";
		document.getElementById(i+"price").innerHTML = "";	
		}
		//i++;
	}

		var footer = document.getElementById('timer');
	footer.innerHTML = 300;
	flag = 0;
	
	 // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("showCart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
} 
	/* clearInterval(inactiveTime);
	inactiveTime = setInterval(function(){ alert("Hey there! Are you still planning to buy something?") }, 30000); */
};

///////////////////////////////////////Assignment 3 starts //////////////////////////////////////////////////////////////////////////////

/* var box1 = new Product('Box1', 10, 'Images\Box1_$10.png');
console.log( box1.name ); // Should print "Box1" to the console.
console.log( box1.computeNetPrice(5) ); // Should print '50' to the console. */

