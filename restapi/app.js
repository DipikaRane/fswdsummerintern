var express=require('express');
var port = process.env.PORT || 8425
var app = express();
var dotenv=require('dotenv');
dotenv.config();


//first default route
app.get('/',(req,res)=>{
    res.send("Hii From Express")
})

app.get('/location',(req,res)=>{
    res.send(location)
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})