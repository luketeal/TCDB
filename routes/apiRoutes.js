const {User, Disposition} = require('../models')

function apiRoutes(app) {
    // Post Route - Disposition
    app.post('/api/disposition', async (req, res) => {
        try {
            const dispositionData = await Disposition.create(req.body)
            res.status(200).json(dispositionData)
        } catch (err) {
            res.status(400).json(err)
        }
    })

    // Get Route
    app.get('/api/dispositions', async (req, res) => {
        try {
            const dispositions = await Disposition.findAll({include: User})
            res.status(200).send(dispositions)
        } catch (err) {
            res.status(500).json(err)
        }
    })
}

module.exports = apiRoutes