const express = require('express');
const app = express();
const PORT = 3500;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const url = path.join(__dirname,'/', 'data.json');
console.log(url)


app.get('/myRoute/:name/:age', async(req,res)=>{
    try{
        console.log('QUERY PARAM', req.params);
        console.log('PATH PARAM', req.url);
        const data = {
            "reqQuery" : req.params,
            "reqPath" : req.url
        }
        console.log("data",data)
        res.send(data);
        res.end()
    }catch(err){
        console.log('ERROR', err)
    }
})

app.post('/', async(req,res)=>{
    const myData = {
        "name" : "SUDHESH",
        "email" : "sudheshholla152gmail.com"
    }
    try{
        const myNewArr = [];
        myNewArr.push(myData.name, myData.email)
        console.log("myNewArr", myNewArr)
        res.send(myNewArr);
        res.end()

    }catch(err){
        console.log("ERROR IN POST REQUEST", err)
    }
})


app.use(bodyParser.json())
app.use(express.json())

app.listen(PORT, function(){
    console.log("Listening to Port " + PORT)
})