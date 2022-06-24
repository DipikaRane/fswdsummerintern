var express=require('express');
var port = process.env.PORT || 8425
var app = express();
var dotenv=require('dotenv');
var mongo=require('mongodb');
var MongoClient=mongo.MongoClient;
dotenv.config();
const mongoUrl=process.env.MongoLiveUrl;

var db;

//first default route
app.get('/',(req,res)=>{
    res.send("Hii From Express")
})

app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
})

app.get('/services',(req,res)=>{
    db.collection('services').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.get('/features',(req,res)=>{
    db.collection('features').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.get('/location/:id',(req,res)=>{
    var id=parseInt(req.params.id);
    // console.log(id);
    // res.send('ok')
    db.collection('location').find({"location_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/state/:id',(req,res)=>{
    var id=parseInt(req.params.id);
    // console.log(id);
    // res.send('ok')
    db.collection('location').find({"state_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/services/:id',(req,res)=>{
    var id=parseInt(req.params.id);
    // console.log(id);
    // res.send('ok')
    db.collection('services').find({"id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/features/:id',(req,res)=>{
    var id=parseInt(req.params.id);
    // console.log(id);
    // res.send('ok')
    db.collection('features').find({"Feature_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//connect with mongodb 
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while Connection");
    db=client.db('HospitalData');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})
