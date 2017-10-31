
// hw2-3.js solution
// How many movies list "Sweden" second in the list of countries?

db.movieDetails.find({ countries : "Sweden" },{ countries: 1, _id: 0}).pretty();

