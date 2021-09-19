const {User, Disposition} = require('../models')

function apiRoutes(app) {
    // Post Route - Disposition
    app.post('/api/disposition', (req, res) => {
        // console.log(req.body)
        Disposition.create(req.body)
        .then(disposition => {
            res.send('Completed')
        })
    })

    // Get Route
    app.get('/api/dispositions', (req, res) => {
        // console.log(req.body)
        Disposition.findAll({include: User})
        .then(dispositions => {
            res.send(dispositions)
        })
    })
}

module.exports = apiRoutes