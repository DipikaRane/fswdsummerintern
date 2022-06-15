if I write
var a="10";
var b="2";
a+b
'102'
>>> parseInt() / parseFloat()

var a="10";
var b="2";
parseInt(a)+parseInt(b)
12
var a="10";
var b="2";
parseFloat(a)+parseFloat(b)
12
var a="10.10";
var b="2";
parseFloat(a)+parseFloat(b)
12.1
var a="10.10";
var b="2";
parseInt(a)+parseFloat(b)
12

var a="Hiii"
parseInt(a)
NaN

var a="Delhi123";
var b="123Delhi";
parseInt(a);
parseInt(b);

NaN
var a="Delhi123";
undefined
parseInt(a)
NaN
var a="123Delhi";
undefined
parseInt(a)
123

var a="Delhi123";
var b="123Delhi";
parseInt(a)+parseInt(b);

var a="Delhi123";
var b="123Delhi";
parseInt(b)+parseInt(a);

//isNaN 
isNaN(10)
false
isNaN('techvanto')
true
isNaN(true)
false
isNaN('true')
true

//ES6
Number()

var a="hi";
var b=102
Number(a)
Number(b)
102
var a="hi";
var b=102
Number(a)
NaN
var a="hi";
var b=102
Number(b)
102
var a="10a"
undefined
Number(a)
NaN
var a="a10"
undefined
Number(a)
NaN
var a="11.01"
undefined
Number(a)
11.01
var b=102
Number(a)
Number(b)