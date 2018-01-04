const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let tweetSchema = mongoose.Schema({
  searchTerm: String,
  searchHour: Number,
  averageScore: Number
});

let Tweet = mongoose.model('Tweet', tweetSchema);

let getAllData = (callback) => {
  Tweet.find().then((data) => {callback(data)});
}

let save = (tweet, callback) => {
  var newTweet = new Tweet(tweet);
  newTweet.save(callback);
}

let find = (term, callback) => {
	console.log('looking for results in database.');
	Tweet.find({searchTerm: term}).then((result) => {
		callback(result);
	});
}

module.exports.save = save;
<<<<<<< HEAD
module.exports.getAllData = getAllData;
=======
module.exports.find = find;
>>>>>>> 059c28118e875080009648e19c7d91b92b49785d