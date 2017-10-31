// add solution hw2-4.js
// How many documents in the video.movieDetails collection lists just the following two genres: "Comedy" and "Crime", where "Comedy" is listed first?
// Find out how many documents have two genres
db.movieDetails.find({ genres: {$size: 2}}).pretty();
// Check out of these if any list Comedy and Crime as genres


