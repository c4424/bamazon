//the npm packages I need
var mysql = require('mysql');
var inquirer = require('inquirer');
//----------------------------------------------------------------------------------//


//this runs mysql database
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'nodeUser',
  password : '',
  database : 'bamazonDB'
});
 
connection.connect(function (err){
  if (err) throw err;
  showProducts();
});


//-----------------------------------------------------------------------------------//
//this part runs the inquirer package

function productDetails() {
  inquirer.prompt([
    {
      type: "input",
      message: "I know it's been a long day, what would you like to drink?",
      name: "product",
      filter: Number,
    },
    
    {
      type: "input",
      message: "Great choice!, how many 6-packs are you taking today?",
      name: "quantity",
      filter: Number,
    }
])

  .then(function (res){
    var items = res.product;
    var productQuantity = res.quantity;
    // establishing connection with the products table
    connection.query("SELECT * FROM products WHERE ?", { item_id:items }, 
      function(err, res){
        if (err) throw err;
        // if they dont select a product, they will get this error message, after that the product list opens again.
        if (response.length === 0) {
          console.log("Please select a product ID from the list");
          showProducts();
        } else {
        // this responds if the quantity selected is in stock
          var productStock = response[0];
          if (productQuantity <= productStock.stock_quantity) {
            console.log("we still have this product on stock")

            var updateInventory = 'UPDATE products SET stock_quantity= ' + (productStock.stock_quantity - productQuantity) + 'WHERE item_id= ' + items;

            connection.query(updateInventory, function (err, data){
              if (err) throw err;
              console.log('Your order has been placed, your total is $' + productStock.price * productQuantity);
              console.log('Thanks for choosing our online bar. Cheers!');
              keepShopping();
            })

          } else {
            console.log('We are sorry but this beer is out of stock.\n' + 'Please select a different beer.\n' + 'your beer was ' + productStock.product_name + 'and there are only ' + productStock.stock_quantity + 'in stock.');
            keepShopping();
          }
        }
      })
  })
}



// this function calls Inquirer productDetails() to show a list of the products and it uses toString() to its more readable info
function showProducts() {
  connection.query('SELECT * FROM products', function (error, res) {
    for (var i = 0; i < res.length; i++) {
      console.log('\n Item ID: ' + res[i].item_id + " | " + 'Beer brand: ' + res[i].product_name + " | " + 'Department: ' + res[i].department_name + " | " + 'Price (6-pack): ' + res[i].price.toString() + " | " + 'Stock: ' + res[i].stock_quantity.toString());
    }    
    console.log("----------------");
    productDetails();
  });

} 

//inquirer promps a question asking if the user wants to keep shopping and it calls the showProducts function 
//if user chooses yes. if user chooses no then connection ends.
function keepShopping(){
  inquirer.prompt([
    {
      type: "confirm",
      message: "do you want to keep shopping for beers?",
      name: "confirm"
    }
  ]).then(function(res){
    if (res.confirm){
      console.log("----------------");
      showProducts();
    } else {
      console.log('Thank you for shopping in our online bar, happy drinking!');
      connection.end();
    }
  })
}

// assignment added to portfolio as well







