import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://127.0.0.1:27017/VR2022_HW5',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected')) //成功時顯示MongoDB Connected
    .catch(err => console.log(err));
const db = mongoose.connection;

module.exports = db;
