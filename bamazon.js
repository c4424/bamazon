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

  .then(answers => { 
    // Use user feedback for... whatever!!
  });
}


  

  // function start () {
  //   inquirer
  //     .prompt({
  //       name: 'postOrBid',
  //       type: 'list',
  //       message: 'Would you like to [POST] an auction or [BID] on an auction?',
  //       choices: ['POST', 'BID', 'EXIT']
  //     })
  //     .then(function (answer) {
  //       // based on their answer, either call the bid or the post functions
  //       if (answer.postOrBid === 'POST') {
  //         postAuction()
  //       } else if (answer.postOrBid === 'BID') {
  //         bidAuction()
  //       } else {
  //         connection.end()
  //       }
  //     })
  // }



function showProducts() {
  connection.query('SELECT * FROM products', function (error, res) {
    for (var i = 0; i < res.length; i++) {
      console.log('\nItem ID ' + res[i].item_id + " | " + 'Beer brand: ' + res[i].product_name + " | " + 'Department: ' + res[i].department_name + " | " + 'Price (6-pack): ' + res[i].price.toString() + " | " + 'Stock: ' + res[i].stock_quantity.toString())
    }    
    console.log("----------------");
    productDetails();
  });

} 





function check(order, quantity){
    connection.query(`SELECT * FROM products WHERE product_name = ?`, [order], function(error, results){
        if (error) throw error;
        console.log(results);
        return;
    })
};


connection.end();


// CHECK ON iceCreamCRUD from activity 09
// CHECK ON greatBayBasic from activity 10
// npm install cli-table
//-----------------------------------------------------//






