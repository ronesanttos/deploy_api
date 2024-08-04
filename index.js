const express = require("express")
const app = express()

app.get('/', (req, res) => {
    return res.json({ msg: "Api funcionando!" })
})

app.post('/teste', (req, res) => {
    const { name, date } = req.body
    return res.json({ name, date })
})

app.listen(3002)