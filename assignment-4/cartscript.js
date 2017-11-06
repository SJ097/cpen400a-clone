var cart = {};
var totalPrice = 0;
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
		
		var limit = 0;
		
		function shelverx(){
			var xhttp = new XMLHttpRequest();
			xhttp.open("GET", url);
			xhttp.onload=function() {
					if (xhttp.status == 200) {
						var resp = JSON.parse(xhttp.responseText);
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
		
	for (var a in products)
		products[a] = productsCompare[a];
	
	showCart();
	
	alert("The total cost is $" + totalPrice);
	
}
	
var url = "https://cpen400a-bookstore.herokuapp.com/products";
	
ajaxGet(url,
		success,
		fatal
	);

function success(response) {
	
	console.log(response);
			alert(response + "SUCCESS");
			for(var key in response){	
				if(response.hasOwnProperty(key)){
					products[key] = response[key];
					//alert(key);
				};
				
			};
			console.log(products);
			keyinitialise();
			showPrices(); // To show the prices of the products
}

function successModal(response) {
	
	console.log(response);
			//var products = {};
			//alert(response + "SUCCESS");
			for(var key in response){	
				if(response.hasOwnProperty(key)){
					productsCompare[key] = response[key];
					//alert(key);
				};
				
			};
			console.log(productsCompare);
	
}

function showPrices(){
	var prices = document.getElementsByClassName("costPosition");
	for(var i =0; i<prices.length; i++){
		prices[keys[i]] = prices[i];
		delete prices[i];
		};
		
		for(var key in products){	
				if(products.hasOwnProperty(key)){
					prices[key].innerHTML = "$" + products[key].price;
				};
				
			};
	
}

function fatal(error) {
	alert(error);
}

var keys = [];
var keyinitialise = function(){

for(var k in products){ 
	keys.push(k);
}
keys.sort();
console.log(keys);
};

function addToCart(productName) {
	if(products[productName].quantity > 0){
		if(cart.hasOwnProperty(productName)){
				cart[productName] +=1; 
		} 
		
		else{
				cart[productName] = 1;
		}

	products[productName].quantity -=1;
	totalPrice += products[productName].price;
	console.log(totalPrice);
	document.getElementById("showCart").textContent = "Cart ($" + totalPrice + ")"; 
	var x = document.getElementsByClassName("removeButton");
	for(var i =0; i<x.length; i++){
		x[keys[i]] = x[i];
		delete x[i];
	};
	
	var y = document.getElementsByClassName("addButton");
	for(var i =0; i<y.length; i++){
		console.log("inside");
		y[keys[i]] = y[i];
		delete y[i];
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
				x[keys[i]] = x[i];
				delete x[i];
			};
	
	var y = document.getElementsByClassName("addButton");
		for(var i =0; i<y.length; i++){
			console.log("inside");
			y[keys[i]] = y[i];
			delete y[i];
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
		
	resetTime();
			
};

function showCart(){
	var output = "";
	var i = 0;
	var table = document.getElementById("cartTable");
	var carey = document.getElementById("total");

	while (table.hasChildNodes()) {
		
		if (table.firstChild === table.lastChild)
			break;
		
		table.removeChild(table.firstChild);
		
	}
	
	var headerNode = document.createElement("tr");
	var one = document.createElement("th");
	var two = document.createElement("th");
	var three = document.createElement("th");
	var four = document.createElement("th");
	var five = document.createElement("th");
	
	one.innerHTML = "Product";
	two.innerHTML = "Quantity";
	three.innerHTML = "Add";
	four.innerHTML = "Remove";
	five.innerHTML = "Price";
	
	headerNode.appendChild(one);
	headerNode.appendChild(two);
	headerNode.appendChild(three);
	headerNode.appendChild(four);
	headerNode.appendChild(five);
	
	table.insertBefore(headerNode, table.lastChild);
	
	var abutton = {};
	var rbutton = {};
	
	for (var productName in cart) {
		
		var newNode = document.createElement("tr");
		var nom = document.createElement("td");
		var quant = document.createElement("td");
		var add = document.createElement("td");
		abutton[productName] = document.createElement("button");
		add.appendChild(abutton[productName]);
		var rem = document.createElement("td");
		rbutton[productName] = document.createElement("button");
		rem.appendChild(rbutton[productName]);
		var prix = document.createElement("td");
		
		nom.innerHTML = productName;
		quant.innerHTML = cart[productName];
		abutton[productName].innerHTML = "+";
		rbutton[productName].innerHTML = "-";
		prix.innerHTML = "$" + products[productName].price*cart[productName];
		
		buttons(productName, abutton, rbutton);
				
		newNode.appendChild(nom);
		newNode.appendChild(quant);
		newNode.appendChild(add);
		newNode.appendChild(rem);
		newNode.appendChild(prix);
		
		table.insertBefore(newNode, table.lastChild);
		
	}
	
	computePrice();
	
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

function buttons(product, put, take) {
	
	put[product].addEventListener("click", function() {addToCart(product);
	showCart(); computePrice();});
	take[product].addEventListener("click", function() {removeFromCart(product);
	showCart(); computePrice();});
	
}

function computePrice() {
	
	totalPrice = 0;
	
	for (var a in cart) {
		totalPrice += products[a].price*cart[a];
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