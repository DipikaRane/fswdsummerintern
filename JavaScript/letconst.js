>var can redeclare and reasign
>let can not redeclare but reasign
>const can not redeclare and not reasign

var a=10;
var a;
a=10

let b=10;
> b
10
> let b=10;
Uncaught SyntaxError: Identifier 'b' has already been declared
> b=11;
11

const c=10;
> c
10
> const c=10;
Uncaught SyntaxError: Identifier 'c' has already been declared
> c=11;
Uncaught TypeError: Assignment to constant variable.