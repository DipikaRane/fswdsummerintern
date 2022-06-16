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