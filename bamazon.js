var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'nodeUser',
  password : '',
  database : 'bamazonDB'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();


//-----------------------------------------------------//

var inquirer = require('inquirer');

inquirer
  .prompt(['which type of beer would you like to buy?'
    /* Pass your questions in here */
  ])
  .then(answers => { 'cheers!'
    // Use user feedback for... whatever!!
  });