// add solution hw2-4.js

// How many documents in the video.movieDetails collection lists just the following two genres: "Comedy" and "Crime", where "Comedy" is listed first?
db.movieDetails.find({ "genres": ["Comedy", "Crime"]}).count();
// 20

