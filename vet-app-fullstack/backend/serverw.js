const express = require('express')
const cors =  require('cors')

const app = express()
app.use(cors())
const port = 8100
const requestHandler = require('./request-handler');
const recursos = require('./recursos');
global.recursos = recursos;

const server = http.createServer(requestHandler)
app.listen(8000, () => {
  console.log('server listen in http://localhost:8000/');
});