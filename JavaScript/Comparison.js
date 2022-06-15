//Comparison operators
 = //assignment
 == //comparison of data
 === //comparison of data and Datatypes

 var a=10
 var b="10" 
 a==b
true
a===b
false

var a="john"
var b="John"
a==b
false //JavaScript is case sensitive
a===b
false

////msgs
console.log();

alert() //notification
prompt() //for taking input
confirm() // for yes/no ok/cancel

alert("Do you want to leave")
undefined
confirm("Do you want to leave")
true
confirm("Do you want to leave")
false

var out=confirm("Do you want to leave?")
out
true
var out=confirm("Do you want to leave?")
out
false
prompt("what is your name")
'Deepika'
var age=prompt("what is your age?")
undefined
age
'30'

var first=prompt("enter first number")
var second=prompt("enetr second number")
first+second
'1020'
var first=prompt("enter first number")
var second=prompt("enetr second number")
parseInt(first)+parseInt(second) //es5
30
var first=prompt("enter first number")
var second=prompt("enetr second number")
parseFloat(first)+parseFloat(second) //es5
40

//es6
var first=prompt("enter first number")
var second=prompt("enetr second number")
Number(first)+Number(second)
110