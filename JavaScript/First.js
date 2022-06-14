JS has Ecma Script => ES -> ES5 and ES6

Datatypes 
1.String = "Hii", 'Mumbai', `Hey` , "89798798", "js768"
2.number = 77892. 6768899, 8871.8782 ,.89
3. Boolean = true(1)/false(0)

//es5
var a=10;
var b="Techvanto"
var c=true;

//ES6
let i=9;
const j=10;

var a=10;
undefined
typeof(a)
'number'

var b="Techvanto"
undefined
typeof(b)
'string'

var c=true;
typeof(c)
'boolean'

var 2="sai"
VM453:1 Uncaught SyntaxError: Unexpected number
var h2="sai"

var a=10; var b=20; 
a+b
30
a-b
-10
a*b
200
a/b
0.5
a%b
10

//concatenation
var h="Techvanto";
var l="Academy";
h+l
'TechvantoAcademy'
l+h
'AcademyTechvanto'

h-l
NaN
h/l
NaN
h*l
NaN

//String logics
1.String + String = String
2.String + Number = String
3.Number + String = String
4.Number + Number = Number

"10"+20+30 => 102030 
"1020"+30 => "102030"

10+"20"+30 => "102030"

10+20+"30" => 30+"30" => "3030"

now
"10"-1 // if both sides of operator are pure numbers then it operates a arithmatic function
9
"10"+1
'101'  // but + will concat

//Boolean 
var a=true;
var b=true;
var c=false;

a+b = 2

var n="Hii";
var b=true;
n+b
'Hiitrue'
n-b
NaN
true-"a"
NaN
