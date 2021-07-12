const express = require("express");
const sqlCon = require("../dbs/sqlConnect");
const router = express.Router();

/* 
the country/ continent must be upper case - e.g Albania / Asia 
if you want to choose more then one info value , you need to saparte it with commas , 

*/

/* 
get - / - return all the data  
optional querys -
orderBy - to set by what the data will order
skip - on how many to skip  
toShow- how many to show 
select - to determan what field to show (can be multipal , need to saperat by comme [,])
*/

/* GET all info in db . */
router.get("/", function (req, res) {
  let orderBy = req.query.orderBy ? req.query.orderBy : "id";
  let skip = req.query.skip ? req.query.skip : 0;
  let toShow = req.query.toShow ? req.query.toShow : 500;
  let select = req.query.select ? req.query.select : "*";
  let reverseOrder = req.query.reverseOrder ? "DESC" : "ASC";

  let myQuery = `SELECT ${select} FROM covidtable ORDER BY '${orderBy}' LIMIT ${skip},${toShow}  ${reverseOrder} `;

  sqlCon.query(myQuery, (err, data, fields) => {
    if (err) {
      return res.status(400).json(err);
    }

    res.status(200).json(data);
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
reverseOrder- to show the data in revere order (from big to small)
*/

/* GET info by continent. */

router.get("/byContinent", function (req, res) {
  let continent = req.query.continent ? req.query.continent : "Asia";
  let orderBy = req.query.orderBy ? req.query.orderBy : "id";
  let skip = req.query.skip ? req.query.skip : 0;
  let toShow = req.query.toShow ? req.query.toShow : 500;
  let select = req.query.select ? req.query.select : "*";
  let reverseOrder = req.query.reverseOrder ? "DESC" : "ASC";

  let myQuery = `SELECT ${select} FROM covidtable WHERE continent ='${continent}'  ORDER BY '${orderBy}' LIMIT ${skip},${toShow} ${reverseOrder} `;

  sqlCon.query(myQuery, (err, data, fields) => {
    if (err) {
      return res.status(400).json(err);
    }

    res.status(200).json(data);
  });
});

/* 
get - /byCountry - return the data from the param Country 
must querys -
continent - name of the continent , 
optional querys -
select - to determan what field to show (can be multipal , need to saperat by comme [,])

*/

/* get info by country  */

router.get("/byCountry/:location", function (req, res) {
  let location = req.params.location ? req.params.location : "Canada";
  let select = req.query.select ? req.query.select : "*";

  let myQuery = `SELECT ${select} FROM covidtable WHERE location = '${location}'  `;
  sqlCon.query(myQuery, (err, data, fields) => {
    if (err) {
      return res.status(400).json(err);
    }

    resc.json(data);
  });
});

module.exports = router;
