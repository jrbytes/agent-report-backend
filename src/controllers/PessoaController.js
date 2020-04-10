const data = [ 
  { nome: 'Junior', dt_nasc: '23/05/1992' },
  { nome: 'Mario', dt_nasc: '23/05/1980' },
  { nome: 'Luigi', dt_nasc: '23/05/1990' },
]

module.exports = {
  async index(request, response) {
    const pessoas = await data
    response.json({ pessoas })
  }
}