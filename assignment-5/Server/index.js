var express = require('express')
var app = express()

//var appHost = 'https://cpen400a-bookstore.herokuapp.com/'; //hard-coded host url (should really be defined in a separate config)

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* app.use(express.json());       // support JSON-encoded bodies
app.use(express.urlencoded()); */ // support URL-encoded bodies

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cpen400a";

// Task 2

/*app.get('/products', function(request, response) {

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var option = getRandomInt(0,4);
  if (option < 4) {
	  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var products_obj = "{";
  db.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    //console.log(result);
	for(var i in result){
		var name = result[i].name;
        var price = result[i].price;
        var quantity = result[i].quantity;
        var imageUrl = result[i].imageUrl;
		//console.log(name + "  " + price);
		//console.log(result.length);
		if(i==(result.length-1)){   // to remove last comma
			console.log("last element");
			products_obj += '"' + name + '":{"name":"' + name + '","price":'
			products_obj += price + ',"quantity":' + quantity + ',"imageUrl":"'
			products_obj += imageUrl + '"}'
		}else{
		
		products_obj += '"' + name + '":{"name":"' + name + '","price":'
        products_obj += price + ',"quantity":' + quantity + ',"imageUrl":"'
        products_obj += imageUrl + '"},'
		}
		
	}
	
	products_obj += '}';
	 response.json(JSON.parse(products_obj));
	console.log(products_obj);
	//console.log(result);
    db.close();
  });
});
   
  } else if (option == 4) {
    response.status(500).send("An error occurred, please try again");
  }
})*/

// Task 3

app.get('/products/:min/:max', function(request, response) {

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  var min = request.params.min;
  var max = request.params.max;
  
  console.log(min, max);
  
   if (isNaN(min) || isNaN(max)) {
    response.status(500).send("The entered values are not numbers");
  };
  
    min = Number(min);
	max = Number(max);
	
	if (min > max) {
    response.status(500).send("Minimum price cannot be greater than maximum price");
  };
  
  if (min == null || max == null) {
	  
	    var option = getRandomInt(0,4);
		if (option < 4) {
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				var products_obj = "{";
				db.collection("products").find({}).toArray(function(err, result) {
				if (err) throw err;
				//console.log(result);
				for(var i in result){
					var name = result[i].name;
			        var price = result[i].price;
    			    var quantity = result[i].quantity;
    			    var imageUrl = result[i].imageUrl;
					//console.log(name + "  " + price);
					//console.log(result.length);
					if(i==(result.length-1)){   // to remove last comma
						console.log("last element");
						products_obj += '"' + name + '":{"name":"' + name + '","price":'
						products_obj += price + ',"quantity":' + quantity + ',"imageUrl":"'
						products_obj += imageUrl + '"}'
					} else {
		
						products_obj += '"' + name + '":{"name":"' + name + '","price":'
						products_obj += price + ',"quantity":' + quantity + ',"imageUrl":"'
						products_obj += imageUrl + '"},'
					}
		
				}
	
				products_obj += '}';
				response.json(JSON.parse(products_obj));
				console.log(products_obj);
				//console.log(result);
			    db.close();
			  });
			});
   
  } else if (option == 4) {
    response.status(500).send("An error occurred, please try again");
  }
	    
  }
  
  else {
  
	var option = getRandomInt(0,4);
	if (option < 4) {
		MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var products_obj = "{";
	db.collection("products").find({}).toArray(function(err, result) {
		if (err) throw err;
		//console.log(result);
		for(var i in result){
			var price = result[i].price;
			if(price>=min && price<=max){
				
			var name = result[i].name;
        
			var quantity = result[i].quantity;
			var imageUrl = result[i].imageUrl;
	
			if(i==(result.length-1)){   // to remove last comma
				console.log("last element");
				products_obj += '"' + name + '":{"name":"' + name + '","price":'
				products_obj += price + ',"quantity":' + quantity + ',"imageUrl":"'
				products_obj += imageUrl + '"}'
			} else {
			
				products_obj += '"' + name + '":{"name":"' + name + '","price":'
				products_obj += price + ',"quantity":' + quantity + ',"imageUrl":"'
				products_obj += imageUrl + '"},'
			}
			
		};
		
	}
	products_obj += '}';
	 response.json(JSON.parse(products_obj));
	console.log(products_obj);
	//console.log(result);
    db.close();
  });
});
   
  } else if (option == 4) {
    response.status(500).send("An error occurred, please try again");
  }
}
});

// Task 4

app.post('/checkout', function(request, response) {
	
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
	var cart = JSON.parse(request.body.cart);
	var filter = request.body.filter;
	// --
	
	
	
})



// --------------------------------------------------

app.get('/products/:productKey', function(request, response) {

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var option = getRandomInt(0,5);
  if (option < 4) {
	  if (request.params.productKey in products){
		  response.json(products[request.params.productKey]);	  
	  }
	  else {
		  response.status(404).send("Product does not exist");
	  }
  } else if (option == 4) {
    response.status(500).send("An error occurred, please try again");
  }
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})