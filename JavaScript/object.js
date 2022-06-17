var movieName="Singham"
var movieRating=4.5
var movieType="Action"

var movieName="Golmal"
var movieRating=4.7
var movieType="Comedy"

//object

var movie={} //curly bracket is object

var movie={
    name:"Singham",
    rating:4.5,
    type:"Action"
}
movie
{name: 'Singham', rating: 4.5, type: 'Action'}

//add
movie.industry="Bollywood"
'Bollywood'
movie
{name: 'Singham', rating: 4.5, type: 'Action', industry: 'Bollywood'}

//update
movie.rating=5
5
movie
{name: 'Singham', rating: 5, type: 'Action', industry: 'Bollywood'}

//delete
movie
{name: 'Singham', rating: 5, type: 'Action', industry: 'Bollywood'}
delete movie.industry
true
movie
{name: 'Singham', rating: 5, type: 'Action'}

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
movie
(2) [{…}, {…}]0: {name: 'Singham', rating: 4.5, type: 'Action'}1: {name: 'Golmal', rating: 4.8, type: 'Comedy'}length: 2[[Prototype]]: Array(0)
movie[1].name
'Golmal'
movie[0].type
'Action'