// hw2-2.js solution
// Which queries produce an outcome that resembles the following?
// {"title" : "P.S. I Love You" }
// {"title" : "Love Actually" }
// {"title" : "Shakespeare in Love" }

db.movieDetails.find({}, {title: 1, _id: 0});
db.movieDetails.find({year: 1964}, {title: 1, _id: 0});
