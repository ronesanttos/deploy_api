const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    return res.json({ msg: "Api funcionando!" })
})

app.post('/teste', (req, res) => {
    const { name, date } = req.body
    return res.json({ name, date })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})