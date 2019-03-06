var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://admin:admin@cluster0-klg9b.mongodb.net/gallery');
mongoose.connection.once('open',()=>{
  console.log("Conected");
});
require('./models/Photo');
module.exports= mongoose;