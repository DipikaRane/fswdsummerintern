var express=require('express');
var app = express();
var dotenv=require('dotenv');
var mongo=require('mongodb');
var MongoClient=mongo.MongoClient;
dotenv.config();
const mongoUrl=process.env.MongoLiveUrl;
const bodyParser=require('body-parser');

var port = process.env.PORT || 8425
var db;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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
    var id=Number(req.params.id);
    // console.log(id);
    // res.send('ok')
    db.collection('features').find({"Feature_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/appointment',(req,res)=>{
    db.collection('orders').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// app.post('/placeorder',(req,res)=>{
//     // console.log(req.body);
//     // res.send('ok')
//     db.collection('orders').insert(req.body,(err,result)=>{
//         if(err) throw err;
//         res.send("Order placed");
//     })
// })

app.post('/postorder',(req,res)=>{
    // console.log(req.body);
    // res.send('ok')
    db.collection('orders').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send("Appointment Booked");
    })
})

app.delete('/deleteOrder',(req,res)=>{
    db.collection('orders').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.delete('/deleteOrder/:id',(req,res)=>{
    var id=Number(req.params.id)
    db.collection('orders').remove({id:id},(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.post('/serviceArray',(req,res)=>{
    // console.log(req.body);
    // res.send(req.body)
    db.collection('services').find({id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.put('/updateStatus/:id',(req,res)=>{
    var id=Number(req.params.id)
    var status=req.body.status?req.body.status:"Booked"
    db.collection('orders').updateOne(
        {id:id},
        {
            $set:{
                "date":req.body.date,
                "Bank":req.body.Bank,
                "bank_status":req.body.bank_status,
                "status":status
            }
        }
    )
    res.send("Data updated")
})
//connect with mongodb 
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while Connection");
    db=client.db('HospitalData');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})
