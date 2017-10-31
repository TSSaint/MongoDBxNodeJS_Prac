// hw2-1 solution
// Which of the choices below is the title of a movie from the year 2013 that is rated PG-13 and won no awards?
// In mongo, run:
db.movieDetails.find({ $and: [ { "awards.wins": {$eq: 0 } }, { "rated": {$eq: "PG-13"} }, { "year": {$eq: 2013 } } ] }, { title: 1, _id: 0 }).pretty();
