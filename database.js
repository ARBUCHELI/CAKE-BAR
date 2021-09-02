const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1/why-test_${env}`;
const options= {
  useNewUrlParser: true,
};

module.exports = {
  mongoose,
  databaseUrl,
  options,
};
