//"https://lovehandicrafts.herokuapp.com/hcproducts" --lie url

var url="https://lovehandicrafts.herokuapp.com/hcproducts";


function getProduct(){
    fetch(url,{method:"GET"}) //method
    .then((res)=>res.json())  //promise
    .then((data)=>{
        for(i=0;i<data.length; i++){
            console.log(data[i]);
            var element=document.createElement('p'); //<p> is created
            var TextNode=document.createTextNode(data[i].product_name)
            element.appendChild(TextNode)
            document.getElementById('output').appendChild(element);
        }
    })
}

//es6
// async function getProduct(){
//     var response= await fetch(url); //promise
//     var data= await response.json()
//     data.map((item)=>{
//         var element=document.createElement('p'); //<p> is created
//         var Text=document.createTextNode(item.product_name)
//         element.appendChild(Text);
//         element.value=item._id;
//         document.getElementById('output').appendChild(element);
//     })
// }