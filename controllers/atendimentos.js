const Atendimento = require('../models/atendimentos.js')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {//res.send('rota de atendimento e usando o GET'))
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
        //res.send('rota de atendimento e usando o POST')
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.deleta(id, res)
    })
}