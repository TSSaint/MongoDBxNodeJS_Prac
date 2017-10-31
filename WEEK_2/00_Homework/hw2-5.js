// solution for hw2-5.js
// How many documents in the video.movieDetails collection list both "Comedy" and "Crime" as genres regardless of how many other genres are listed?
// Check collection movieDetails for all documents where the genres "Comedy" and "Crime" exist inside
db.movieDetails.find({ $and : [ {genres: "Comedy"}, {genres: "Crime"}]}).count();
