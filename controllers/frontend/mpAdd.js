const Users = require('../../models/Users')

module.exports = (req, res) => {
    Users.findById(req.params.destId, (error, dest) => {

        res.render('frontendView/mp/add', {dest})
    })
}