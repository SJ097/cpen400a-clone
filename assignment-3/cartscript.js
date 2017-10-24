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

function resetTime() {
	var footer = document.getElementById('timer');
	footer.innerHTML = 300;
	flag = 0;
}

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

function addToCart(productName, k) {
	if(products[productName].quantity > 0){
		if(cart.hasOwnProperty(productName)){
				cart[productName] +=1; 
		} 
		
		else if (k == 0) return;
		
		else{
				cart[productName] = 1;
		}

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
	
	var z = document.getElementsByClassName("centered");
	for(var i =0; i<z.length; i++){
		z[keys[i]] = z[i];
		delete z[i];
	};
	
	var a = document.getElementsByClassName("resizeCart");
	for(var i =0; i<a.length; i++){
		a[keys[i]] = a[i];
		delete a[i];
	};
		
	if(cart[productName]>0){
		console.log(x);
		x[productName].style.display = "flex";

	}
	
	if(products[productName].quantity == 0){
		console.log(y);
		y[productName].style.display = "none";
		z[productName].style.display = "block";
		a[productName].style.display = "none";

	}
	
	}
	resetTime();
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
		
		var z = document.getElementsByClassName("centered");
		for(var i =0; i<z.length; i++){
		z[keys[i]] = z[i];
		delete z[i];
	};
	
	var a = document.getElementsByClassName("resizeCart");
	for(var i =0; i<a.length; i++){
		a[keys[i]] = a[i];
		delete a[i];
		};
		
	if(!(cart.hasOwnProperty(productName))){
		//console.log(x);
		//console.log("inside");
		x[productName].style.display = "none";

		}
	
	if(products[productName].quantity > 0){
		//console.log(y);
		y[productName].style.display = "flex";
		z[productName].style.display = "none";
		a[productName].style.display = "block";
		
		}
	}
		
	console.log(cart);
	console.log("Quantity Remaining Of " +products[productName].product.name + " " +products[productName].quantity);
		
	resetTime();
			
};

var b4u = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var bouton = ['', '', '', '', '', '', '', '', '', '', '', ''];
var boutonm = ['', '', '', '', '', '', '', '', '', '', '', ''];
var pro = ['', '', '', '', '', '', '', '', '', '', '', '', ''];
var go = [0,0,0,0,0,0,0,0,0,0,0,0,0];

function showCart(){
	var output = "";
	var i = 0;

	for(var productName in products){
		
		if (cart.hasOwnProperty(productName)) {
			document.getElementById(i+"name").innerHTML = productName;
			document.getElementById(i+"quantity").innerHTML = cart[productName];
			document.getElementById(i+"price").innerHTML = "$" + products[productName].product.computeNetPrice(cart[productName]);
		
			pro[i] = productName;
		
			if (b4u[i] == 0) {
				go[i] = 1;
		
				bouton[i] = document.createElement("BUTTON");
				var positive = document.createTextNode("+");
				bouton[i].appendChild(positive);

		
				document.getElementById(i+"plus").appendChild(bouton[i]);
		
				boutonm[i] = document.createElement("BUTTON");
				var negative = document.createTextNode("-");
				boutonm[i].appendChild(negative);

				
		
				document.getElementById(i+"minus").appendChild(boutonm[i]);
				b4u[i] = 1;
			}
		
			i++;
		}
		else {
			document.getElementById(i+"name").innerHTML = "";
			document.getElementById(i+"quantity").innerHTML = "";
			document.getElementById(i+"price").innerHTML = "";
		
		
			go[i] = 0;
		}
	}

	for (var j = i; j < 12; j++) {
		document.getElementById(i+"name").innerHTML = "";
		document.getElementById(i+"quantity").innerHTML = "";
		document.getElementById(i+"price").innerHTML = "";
		document.getElementById(j+"plus").innerHTML = "";
		document.getElementById(j+"minus").innerHTML = "";
	}
	
	document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
	
	resetTime();
	
	 // Modal code
	 
	var modal = document.getElementById('myModal');

	// Modal button
	var btn = document.getElementById("showCart");

	// Close modal
	var span = document.getElementsByClassName("close")[0];

	// Display modal when cart button is clicked
    modal.style.display = "block";

	span.onclick = function() {
		modal.style.display = "none";
	} 

};

function showModal() {
	
	showCart();
	document.getElementById(i+"plus").innerHTML = "";
	document.getElementById(i+"minus").innerHTML = "";
	document.getElementById(i+"plus").appendChild(bouton[i]);
	document.getElementById(i+"minus").appendChild(boutonm[i]);
}

function buttonAdd(i, k) {
	
	addToCart(pro[i], k);
}

function buttonRemove(i) {
	var w = 0;
	removeFromCart(pro[i], k);
	if (!cart.hasOwnProperty(pro[i])) {
		delete document.getElementById(i+"plus");
		
		
		for (var product in cart)
			w++;
			
		if (w == 0)
			for (var j = 0; j < 12; j++)
				b4u[j] = 0;
		
		if (bouton[12] != '') {
			bouton = ['', '', '', '', '', '', '', '', '', '', '', ''];
			boutonm = ['', '', '', '', '', '', '', '', '', '', '', ''];
		}
	}
}

// Handle ESC key (key code 27)
document.addEventListener('keyup', function(e) {
	var modal = document.getElementById('myModal');
    if (e.keyCode == 27) {
		
		if (!(modal.style.display == "none")) {
			resetTime();
		}
		
        modal.style.display = "none";
    }
});

