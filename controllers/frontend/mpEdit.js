const Mp = require('../../models/Mp');

module.exports = (req, res) => {

    Mp.findById(req.params.mpId, (error, mp) => {

        res.render('frontendView/mp/edit', { mp })
    })
}