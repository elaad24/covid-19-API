const express = require("express");
const sqlCon = require("../dbs/sqlConnect");
const router = express.Router();

/* 
get - / - return all the data  
optional querys -
orderBy - to set by what the data will order
skip - on how many to skip  
toShow- how many to show 
select - to determan what field to show (can be multipal , need to saperat by comme [,])
*/

/* GET home page. */
router.get("/", function (req, res, next) {
  let orderBy = req.query.orderBy ? req.query.orderBy : "id";
  let skip = req.query.skip ? req.query.skip : 0;
  let toShow = req.query.toShow ? req.query.toShow : 500;
  let select = req.query.select ? req.query.select : "*";

  let myQuery = `SELECT ${select} FROM covidtable ORDER BY '${orderBy}' LIMIT ${skip},${toShow} `;

  sqlCon.query(myQuery, (err, data, fields) => {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(data);
  });
});

/* 
get - /byContinent - return the data from the query continent 
must querys -
continent - name of the continent , 
optional querys -
orderBy - to set by what the data will order
skip - on how many to skip  
toShow- how many to show 
select - to determan what field to show (can be multipal , need to saperat by comme [,])

*/

/* GET home page. */

router.get("/byContinent", function (req, res) {
  let continent = req.query.continent ? req.query.continent : "Asia";
  let orderBy = req.query.orderBy ? req.query.orderBy : "id";
  let skip = req.query.skip ? req.query.skip : 0;
  let toShow = req.query.toShow ? req.query.toShow : 500;
  let select = req.query.select ? req.query.select : "*";

  let myQuery = `SELECT ${select} FROM covidtable WHERE continent ='${continent}'  ORDER BY '${orderBy}' LIMIT ${skip},${toShow} `;

  sqlCon.query(myQuery, (err, data, fields) => {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(data);
  });
});

/* 
get - /byCountry - return the data from the param Country 
must querys -
continent - name of the continent , 
optional querys -
select - to determan what field to show (can be multipal , need to saperat by comme [,])

*/

router.get("/byCountry/:location", function (req, res) {
  let location = req.params.location ? req.params.location : "Canada";
  let select = req.query.select ? req.query.select : "*";

  let myQuery = `SELECT ${select} FROM covidtable WHERE location = '${location}' `;
  sqlCon.query(myQuery, (err, data, fields) => {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(data);
  });
});
module.exports = router;
