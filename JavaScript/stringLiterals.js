var name="Techvanto"
var name1="Academy"
var rate = 4.5
var source= "Delhi"
var country="India"

I want to construct a sentence :

The Techvanto Academy of Delhi India is having rating 4.5

//es5 way
var out="The "+name+" "+name1+" of "+source+" "+country+" is having rating"+rate+"."

out
'The Techvanto Academy of Delhi India is having rating4.5.'

//es6 ways
var out=`The ${name} ${name1} of ${source} ${country} is having rating ${rate}.`
out
'The Techvanto Academy of Delhi India is having rating 4.5.'