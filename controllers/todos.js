const todosDB = require('../models/todo')

module.exports = {
  index
}

function index(req, res) {
  res.render('todos/index', { todos: todosDB.getAll() })
}
