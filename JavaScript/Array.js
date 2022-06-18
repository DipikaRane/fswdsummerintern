//Array

var a=['a', 'b', 'c', 'd', 'e'] // string array
var b=[1,2,3,4,5,6,7,8]     //number array
var c=[true,false,false,true,true] //array of boolean

//In JS array like this
var d=[1,2,3,4,'a','b','c',true,false] //hetergeneous datatypes


//array operations

var city=["Delhi","Mumbai","Pune","Kolkata","Chennai"]
city.length
5
typeof(city)
'object'
city[0]
'Delhi'
city[4]
'Chennai'
city[city.length-1]
'Chennai'

//push(), pop(), shift(), unshift()

//push()
var city=["Delhi","Mumbai","Pune","Kolkata","Chennai"]
city.push("Bathinda")
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']

//pop()
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.pop()
'Bathinda'
city.pop(1)
'Chennai'
city.pop()
'Kolkata'

//shift --work like pop
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.shift()
'Delhi'
city
(5) ['Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']

//unshift --works like push
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.unshift("Manali")
7
city
(7) ['Manali', 'Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']

//slice in array 
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.slice(1)
(5) ['Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.slice(2)
(4) ['Pune', 'Kolkata', 'Chennai', 'Bathinda']

var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.slice(2,5)
(3) ['Pune', 'Kolkata', 'Chennai']

//splice --add, remove and can overwrite
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.splice(3,0,"Chandigarh","Mohali")
[]
city
(8) ['Delhi', 'Mumbai', 'Pune', 'Chandigarh', 'Mohali', 'Kolkata', 'Chennai', 'Bathinda']
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.splice(3,1,"Chandigarh","Mohali")
['Kolkata']
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Chandigarh', 'Mohali', 'Chennai', 'Bathinda']
 
nameOfArray.splice('start','deleteCount',arrayData)

//concat
var a=[1,2,3,'a',5]
var b=[1,'c','b']
a+b
'1,2,3,a,51,c,b'
a.concat(b)
(8) [1, 2, 3, 'a', 5, 1, 'c', 'b']

//sort
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.sort()
(6) ['Bathinda', 'Chennai', 'Delhi', 'Kolkata', 'Mumbai', 'Pune']

var a=[3,4,6,9,2,1]
a.sort()
(6) [1, 2, 3, 4, 6, 9]

//Array.isArray
var a=[10];
Array.isArray(a)
true
var a=10;
Array.isArray(a)
false

//multidmensional array
var students=[['Mark',24],['Aman',20],['Rahul',23]];

let student1=['Mark',24];
let student2=['Aman',20];
let student3=['Rahul',23];

let students=[student1,student2,student3];

//map function
var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
city.map((data)=>{console.log(data)})
Delhi
VM48:2 Mumbai
VM48:2 Pune
VM48:2 Kolkata
VM48:2 Chennai
VM48:2 Bathinda
(6) [undefined, undefined, undefined, undefined, undefined, undefined]0: undefined1: undefined2: undefined3: undefined4: undefined5: undefinedlength: 6[[Prototype]]: Array(0)
var a=[1,2,3,4,56]
undefined
a.map((data)=>{return data*2})
(5) [2, 4, 6, 8, 112]

//filter
var a=[1,2,3,4,5,6]
a.filter((data)=>{return data>3})
(3) [4, 5, 6]

