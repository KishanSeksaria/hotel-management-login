const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotel', () => console.log('DB connected'));

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;