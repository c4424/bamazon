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
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => { 
    // Use user feedback for... whatever!!
  });
  

  function start () {
    inquirer
      .prompt({
        name: 'postOrBid',
        type: 'list',
        message: 'Would you like to [POST] an auction or [BID] on an auction?',
        choices: ['POST', 'BID', 'EXIT']
      })
      .then(function (answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === 'POST') {
          postAuction()
        } else if (answer.postOrBid === 'BID') {
          bidAuction()
        } else {
          connection.end()
        }
      })
  }



 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});




function check(order, quantity){
    connection.query(`SELECT * FROM products WHERE product_name = ?`, [order], function(error, results){
        if (error) throw error;
        console.log(results);
        return;
    })
};

// check("Bud Light", 1)
// check("Modelo", 3)

connection.end();


// CHECK ON iceCreamCRUD from activity 09
// CHECK ON greatBayBasic from activity 10
// npm install cli-table
//-----------------------------------------------------//






