const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "covidapi",
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  return console.log("mysql connected");
});

module.exports = connection;
