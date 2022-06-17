//for loop
//use of loop
// 1. print the series data
//2. iterate over data

for(i=0; i<5; i++){
    console.log(i)
}
0
1
2
3
4

var city=['Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Chennai', 'Bathinda']
for(i=0; i<city.length; i++){
    console.log(city[i]);
}

var movie=[
    {
        name:"Singham",
        rating:4.5,
        type:"Action"
    },
    {
        name:"Golmal",
        rating:4.8,
        type:"Comedy"
    }
]
for(i=0;i<movie.length;i++){
    console.log(movie[i].name)
}
Singham
Golmal