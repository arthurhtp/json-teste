const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

// Render usa a porta do ambiente (PORT) ou 3000 localmente
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`)
})
