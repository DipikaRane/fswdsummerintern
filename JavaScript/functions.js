var a=10
var b=20
a+b  //repeat...

//solution is function
//es5
//First way
function add(a,b){
    return a+b; 
}

//second way
var add=function(a,b){
    return a+b;
}


function add(a,b){
    return a+b; 
}
add(10,11)
21

//es6 way
var add = (a,b) => {return a+b}   //called as arrow function
add(20,30)
50