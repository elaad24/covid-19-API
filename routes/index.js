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
orderBy - to set who the data will be order   
skip - on how many to skip  
toShow- how many to show 
select - to determine  what field to show (can be multiple , need to separate by comma [,])

// ascend - to set if the data wiwll show on asnding order or decending : defulat descend

*/

/* GET all info in db . */
router.get("/", function (req, res) {
  let orderBy = req.query.orderBy ? req.query.orderBy : "id";
  let skip = req.query.skip ? req.query.skip : 0;
  let toShow = req.query.toShow ? req.query.toShow : 500;
  let select = req.query.select ? req.query.select : "*";
  let ascend = req.query.ascend ? "ASC" : "DESC";

  let myQuery = `SELECT ${select} FROM covidtable
   ORDER BY  covidtable.${orderBy} ${ascend}
    LIMIT ${skip},${toShow}   `;

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
select - to determine  what field to show (can be multiple , need to separate by comma [,])
*/

// ascend - to set if the data wiwll show on asnding order or decending : defulat descend

/* GET info by continent. */

router.get("/byContinent", function (req, res) {
  let continent = req.query.continent ? req.query.continent : "";
  let orderBy = req.query.orderBy ? req.query.orderBy : "id";
  let skip = req.query.skip ? req.query.skip : 0;
  let toShow = req.query.toShow ? req.query.toShow : 500;
  let select = req.query.select ? req.query.select : "*";
  let ascend = req.query.ascend ? "ASC" : "DESC";

  let myQuery = `SELECT ${select} FROM covidtable
     WHERE continent='${continent}'
      ORDER BY covidtable.${orderBy} ${ascend} LIMIT ${skip},${toShow}  `;

  console.log(myQuery);

  try {
    sqlCon.query(myQuery, (err, data, fields) => {
      if (!continent) {
        err = { Error: "must supply query continent !  " };
        res.status(400).json(err);
      }

      if (!err) {
        res.status(200).json(data);
      }
    });
  } catch (err) {}
});

/* 
get - /byCountry - return the data from the param Country 
must querys -
continent - name of the continent , 
optional querys -
select - to determine  what field to show (can be multiple , need to separate by comma [,])

*/

/* get info by country  */

router.get("/byCountry/:location", function (req, res) {
  let location = req.params.location ? req.params.location : "";
  let select = req.query.select ? req.query.select : "*";

  let myQuery = `SELECT ${select} FROM covidtable WHERE location = '${location}'  `;
  try {
    sqlCon.query(myQuery, (err, data, fields) => {
      if (!location) {
        err = { Error: "must supply params location !  " };
        res.status(400).json(err);
      }
      if (err) {
        res.status(400).json(err);
      }

      res.status(200).json(data);
    });
  } catch (error) {}
});

// edge case if user doesnt give params county

router.get("/byCountry/", function (req, res) {
  let err = { Error: "must provide a params  location =  country name !" };
  res.status(400).json(err);
});

module.exports = router;
