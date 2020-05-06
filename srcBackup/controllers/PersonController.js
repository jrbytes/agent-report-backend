const Person = require('../models/Person')

module.exports = {
  async index(request, response) {
    try {
      const people = await Person.find()
      return response.json({ people })
    } catch (error) {
      return response.status(400).json({message: error.message})
    }
  },

  async findOne(request, response) {
    try {
      const person = await Person.findById(request.params.id)
      return response.json({person})
    } catch (error) {
      return response.status(400).json({message: error.message})
    }
  },

  async create(request, response) {
    try {
      const person = await Person.create(request.body)
      return response.json({person})
    } catch (error) {
      return response.status(400).json({message: error.message})
    }
  },

  async update(request, response) {
    try {
      await Person.findByIdAndUpdate(
        request.params.id,
        request.body,
        { runValidators: true }
      )
      return response.json({message: 'Succesfully saved'})
    } catch (error) {
      return response.status(400).json({message: error.message})
    }
  }
}