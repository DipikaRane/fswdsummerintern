//conditional statement
if-else

//syntax
if(condition){

}else{

}

//nested syntax
if(condition){

}else if(conditon){

}else{

}

var a=20;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
20 is even

var a=21;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
 21 is odd

 var myname="John"
 if(myname=="Ankit"){
    console.log(`Hi ${myname}, you are not admin`)
 }else if(myname=="John"){
    console.log(`Hi ${myname} you are admin`)
 }else{
    console.log(`Hi ${myname}, you are user`)
 }
 Hi John you are admin
 undefined
  var myname="Ankit"
  if(myname=="Ankit"){
     console.log(`Hi ${myname}, you are not admin`)
  }else if(myname=="John"){
     console.log(`Hi ${myname} you are admin`)
  }else{
     console.log(`Hi ${myname}, you are user`)
  }
 VM79:3 Hi Ankit, you are not admin
 undefined
  var myname="Deepika"
  if(myname=="Ankit"){
     console.log(`Hi ${myname}, you are not admin`)
  }else if(myname=="John"){
     console.log(`Hi ${myname} you are admin`)
  }else{
     console.log(`Hi ${myname}, you are user`)
  }
 VM108:7 Hi Deepika, you are user


 ///Ternerary operator
 // called as single lin if-else

 syntax :
 condition? if condition is true(statement) :  if condition is false(statement)

 var a=10;
 a>10? "Hii" : "Bye"
 'Bye'
 var a=11;
 a>10? "Hii" : "Bye"
'Hii'
var b=20;
b>10? b+1 : b-1
21