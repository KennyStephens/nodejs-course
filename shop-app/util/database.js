const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://kenkneesteefens:4PVGlYV0HuZ3k7vM@cluster0-drydi.mongodb.net/test?retryWrites=true')
  .then(client => {
    console.log('Connected!');
    callback(client);
  })
  .catch(err => {
    console.log(err)
  });
};

module.exports = mongoConnect;



