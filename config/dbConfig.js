const mongoose =  require("mongoose")
require('dotenv').config({ path: './config/config.env' });

 const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB:', err.message);
    });
};

module.exports = {connectDatabase};