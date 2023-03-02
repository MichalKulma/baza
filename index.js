const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const app=express()
app.use(cors())

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nowabaza"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    else console.log("połączono")
})

app.get('/select',function(req,res){
    const sql="SELECT * FROM tab1"
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        console.log(fields)
        res.send(result)
    })
})

app.get('/add:imie/:nazwisko/:klasa',function(req,res){
const imie=req.params.imie
const nazwisko=req.params.nazwisko
const klasa=req.params.klasa
const sql=`INSERT INTO tab1 (imie,nazwisko,klasa) VALUES ('${imie}','${nazwisko}','${klasa}')`
con.query(sql,function(err,result,fields){
    if(err){ console.log(err)
    res.send("Nie dodano do bazy")
    }
    else res.send("Dodano do bazy")
})
})



app.get('/',function(req,res){
    res.send("działa")
})

app.listen(3000)