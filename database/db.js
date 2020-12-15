const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connect: () => {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
const connection = mongoose.connection;
connection.once('open' , ()=>{
    console.log('Connected to Database Successfully ..')
})
connection.on('error' , ()=>{
    console.log('Error connceting to database' , +error)
})
  },
};
