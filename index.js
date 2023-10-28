const http = require('node:http')
const saludo = 'Este es el saludo principal de la página'
const mensaje = 'Esto es un mensaje que se escribe desde el servidor'

const processResponse = (req, res) => {
  res.writeHeader(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end(`
  <!DOCTYPE html>
  <html lang="es">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  
  <body>
    <h1>${saludo}</h1>
    <h3>${mensaje}</h3>
  </body>
  
  </html>
  `)
}
const server = http.createServer(processResponse)
server.listen(3000, () => {
  console.log('SERVIDOR FUNCIONANDO...')
})
