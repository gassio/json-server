var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')

server.use(jsonServer.bodyParser)

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})