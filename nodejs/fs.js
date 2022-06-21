//file system
var fs = require('fs');

//create file
//  fs.writeFile('myDoc.txt',"Hii This from fs module", function(err){
//     if(err) throw err;
//     console.log("File created")
//  })

//file append
// fs.appendFile('myText.txt',"This is from append file\n",function(err){
//     if(err) throw err;
//     console.log("File appended")
// })

//read file
// fs.readFile('myText.txt','utf-8',(err,data)=>{
// if(err) throw err;
// console.log(data);
// })

 //reading json file
// fs.readFile('location.json','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//     })

// fs.rename('myDoc.txt','myCode.txt',function(err){
//     if(err) throw err;
//     console.log('file renamed')
// })

//delete file
fs.unlink('myCode.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted')
})