//math function for employee Id

function empId(){
    var eid=`TVA${Math.floor(Math.random()*10000)}`
    document.getElementById('eid').value=eid;
}

//onblur by es5
function validatefname(){
    var fname=document.getElementById('firstname').value;
    if(fname.trim().length==0){
        document.getElementById('fout').innerHTML="Please Enter Your Name";
    }
    else{
        document.getElementById('fout').innerHTML="";
        fname=fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase();
        document.getElementById('firstname').value=fname;
    }
}

//onclick in es6
var showPassword=()=>{
    var pwd=document.getElementById('pwd')
    if(pwd.type=="password"){
        pwd.type="text"
    }
    else{
        pwd.type="password"
    }
}

//oninput
function validatePwd(){
    var pwd=document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Minimum length of Password is 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red";
        }
        else{
            if(pwd.length<11){
                document.getElementById('pout').innerText="Weak password";
                document.getElementById('ppout').style.backgroundColor="orange";
            }
        }
    }
    else{
        document.getElementById('pout').innerText="Strong Password";
        document.getElementById('ppout').style.backgroundColor="green";
    }
}

//onchange
var changeText=()=>{
    var expr=document.getElementById('exp').value;
    document.getElementsByClassName('experience')[0].innerText=`Total Years of Experience is ${expr}`
}

var validateCPwd  = () => {
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does Not Match"
        document.getElementById('cpwd').style.borderColor="red"
    }else{
        document.getElementById('cpout').innerText=""
        document.getElementById('cpwd').style.borderColor="green"
    }
}