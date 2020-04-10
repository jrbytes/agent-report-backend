const mongoose = require('../database')

const PersonSchema = mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['m', 'f'], required: true },
  mother: String,
  birth_date: { type: String, required: true },
  medical_records: { type: Number, required: true },
  hypertension: { type: Boolean, default: false },
  diabetes: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  registeredAt: { type: Date, default: Date.now() }
})

const Person = mongoose.model('person', PersonSchema)

module.exports = Person