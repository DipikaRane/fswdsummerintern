//toLowercase

var name1="KaNIka"
name1.toLowerCase()
'kanika'

//toUpperCase
var name1="KaNIka"
name1.toUpperCase()
'KANIKA'

var name1="John"
var name2="john"
name1==name2
false
name1.toLowerCase()==name2.toLowerCase()
true

//length
var city="Amritsar"
city.length
8
city[0]
'A'
city[4]
't'

//trim()
var city="    Paris  "
city.length
11
city.trim()
'Paris'
city.trim().length
5

var city="   Bathinda  . "
city.length
15
var city="   Bathinda  . "
city.trim()
'Bathinda  .'
var city="   Bathinda  . "
city.trim().length
11

//charAt()
var city="amriTSAr"
city.charAt(0)
'a'
city.charAt(3)
'i'
city.charAt(0).toUpperCase()
'A'

//slice
var city="amriTSAr"
city.slice(1)
'mriTSAr'
city.slice(3)
'iTSAr'
city.slice(1,5)
'mriT'
city.slice(-1)
'r'
city.slice(0,-1)
'amriTSA'

//use of combinations
var city="amriTSAr"
city.charAt(0)
city.charAt(0).toUpperCase()
city.slice(1)
city.slice(1).toLowerCase()
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()

var city="amriTSAr"
'a'
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mriTSAr'
city.slice(1).toLowerCase()
'mritsar'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amritsar'

//replace
var a="I am learning Javascript"
a.replace(/Javascript/,'JS')

var a="Javascript I am learning Javascript"
a.replace(/Javascript/,'JS')
'JS I am learning Javascript'

var a="Javascript I am learning Javascript"
a.replace(/Javascript/g,'JS') /// g means global
'JS I am learning JS'

var a="Javascript I am learning Javascript Javascript"
a.replace(/Javascript/g,'JS')
'JS I am learning JS JS'

var city="   Bathinda  . "
city.replace(/ /g,'')
'Bathinda.'

//split
var url="https://techvantoacademy.com/#/coming-soon"
url.split('/')
(5) ['https:', '', 'techvantoacademy.com', '#', 'coming-soon']0: "https:"1: ""2: "techvantoacademy.com"3: "#"4: "coming-soon"length: 5[[Prototype]]: Array(0)
url.split('#')
(2) ['https://techvantoacademy.com/', '/coming-soon']

var out=url.split('/')
out
['https:', '', 'techvantoacademy.com', '#', 'coming-soon']
out[out.length-1]
'coming-soon'

var name1="javascript"
name1.split('')
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

//toString()
var name1="javascript"
var out=name1.split('')
out
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
out.toString()
'j,a,v,a,s,c,r,i,p,t'
out.toString().replace(/,/g,'')
'javascript'