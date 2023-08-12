const express = require('express')
const app = express()
const port = 3000
const db = require('./db/messages')

app.get('/', (req, res) => {
    res.send("It's working!")
})

app.get('/messages', async (req, res) => {
    const messages = await db.getAllMsg()
    res.status(200).json({ messages })
})

app.post('/messages', async (req, res) => {
    const result = await db.createMsg(req.body)
    res.status(200).json({id: result[0]})
})

app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`)
})