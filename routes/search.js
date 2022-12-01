var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var dotenv = require('dotenv');

const pool =  mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'hjsadjkl' ,
  database: 'webwork'
}).promise()

async function getTable(){
  const [rows] = await pool.query("SELECT * FROM Article");
    return rows;
}
async function getTableId(id){
  const [rows] = await pool.query(`SELECT ? FROM Article`,id);
}


router.get('/', async function(req, res, next){
  let database = await getTable("title");
  let title = [];
  for(let i=0; i<database.length; i++){
    title.push(database[i].title);
    
  }
  res.render('search',{
    item: title,
  })
})





module.exports = router;