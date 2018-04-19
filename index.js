'use strict'

const express = require('express')
const app = express()
const WebSocketServer = require('ws').Server,

wss = new WebSocketServer({port: 3030})

wss.on('connection', function(ws){
    ws.on('message',function(message){
        console.log(`received: ${message}`)
    })

    ws.send(`${new Date}`)
})

app.listen(3000, () => {

    console.log('API REST corriendo en http://localhost:3000')

})