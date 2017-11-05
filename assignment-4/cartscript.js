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


function displayPrices() {
	
	
	
	
	
	
	
}


var products = {};
var productsCompare = {};

	
var ajaxGet = function(url, successCallback, errorCallback){
		console.log("Calling "+url);
		
		var limit = 0;
		
		function shelverx(){
			var xhttp = new XMLHttpRequest();
			xhttp.open("GET", url);
			xhttp.onload=function() {
					if (xhttp.status == 200) {
						var resp = JSON.parse(xhttp.responseText);
						//console.log(resp.PC1);
						successCallback(resp);
				}
				else{
					limit++;
					errorCallback(xhttp.statusText);
					if (limit < 7) setTimeout( shelverx, 1000 );
				}
				 
			};
			xhttp.ontimeout = function() {
			shelverx();
		};
			xhttp.timeout = 3000;
			 //xhttp.open("GET", url, true);
			 xhttp.send();
		};
		shelverx();
			 
}

var ajaxGetCheckout = function(url, successCallback, errorCallback) {
	//console.log("Calling "+url);
		
		var limit = 0;
		
		function shelverx(){
			var xhttp = new XMLHttpRequest();
			xhttp.open("GET", url);
			xhttp.onload=function() {
					if (xhttp.status == 200) {
						var resp = JSON.parse(xhttp.responseText);
						//console.log(resp.PC1);
						successCallback(resp);
											
						checkoutCompare();
						
					}
				else{
					limit++;
					errorCallback(xhttp.statusText);
					if (limit < 7) setTimeout( shelverx, 1000 );
				}
				 
			};
			xhttp.ontimeout = function() {
			shelverx();
		};
			xhttp.timeout = 3000;
			 //xhttp.open("GET", url, true);
			 xhttp.send();
		};
		shelverx();
	
	
}

function checkoutCompare() {
	
	var quantityMessage = "";
	var priceMessage = "";
	
	for (var a in cart) {
							
		if (cart[a] > productsCompare[a].quantity) {
			quantityMessage += "There are only " + productsCompare[a].quantity + " " + a + " in stock.\n";
			cart[a] = productsCompare[a].quantity;
		}
			
		if (products[a].price != productsCompare[a].price) {
			priceMessage += a + "'s price is now $" + productsCompare[a].price + ".\n";
		}
	}
						
	if (quantityMessage != "")
		alert(quantityMessage);
						
	if (priceMessage != "")
		alert(priceMessage);
		
	for (var a in products) {
		products[a].price = productsCompare[a];
	}
	
	showCart();
	
	//alert("The total cost is $" + totalPrice);
	
}
	
var url = "https://cpen400a-bookstore.herokuapp.com/products";
	
ajaxGet(url,
		success,
		fatal
	);

function success(response) {
	
	console.log(response);
			//var products = {};
			alert(response + "SUCCESS");
			for(var key in response){	
				if(response.hasOwnProperty(key)){
					products[key] = response[key];
					//alert(key);
				};
				
			};
			console.log(products);
			keyinitialise(products, keys);
}

function successModal(response) {
	
	console.log(response);
			//var products = {};
			alert(response + "SUCCESS");
			for(var key in response){	
				if(response.hasOwnProperty(key)){
					productsCompare[key] = response[key];
					//alert(key);
				};
				
			};
			console.log(productsCompare);
			keyinitialise(productsCompare, keys);
	
}

function fatal(error) {
	alert(error);
}


var keys = [];
var keysUpdate = [];
var keyinitialise = function(items, keyz){

for(var k in items){ 
	keyz.push(k);
}
keyz.sort();
console.log(keyz);
};

function addToCart(productName) {
	if(products[productName].quantity > 0){
		if(cart.hasOwnProperty(productName)){
				cart[productName] +=1; 
		} 
		
		//else if (k == 0) return;
		
		else{
				cart[productName] = 1;
		}

	products[productName].quantity -=1;
	/* console.log((products[productName].product.name) + " added");
	console.log("Price of " + products[productName].product.name + " is " + products[productName].product.price);
	console.log("Quantity of " +products[productName].product.name + " in cart is " + cart[productName]) */
	//console.log(products[productName].quantity);
	totalPrice += products[productName].price;
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
			totalPrice -= products[productName].price;
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
	//console.log("Quantity Remaining Of " +products[productName].product.name + " " +products[productName].quantity);
		
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
			document.getElementById(i+"price").innerHTML = "$" + (products[productName].price * cart[productName]);
		
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
	removeFromCart(pro[i]);
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

/// Assignment-4 starts