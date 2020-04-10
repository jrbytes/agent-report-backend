const mongoose = require('mongoose')
require('dontenv').config()

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to DB!')
)
mongoose.Promise = global.Promise

module.exports = mongoose