const Users = require('../../models/Users')

module.exports = (req, res) => {
    Users.findById(req.params.destId, (error, dest) => {

        if (req.flash('data')[0] == 'admin') {
            const admin = true
            res.render('frontendView/mp/add', { dest, admin })
        } else if (req.flash('data')[0] == 'member') {
            const member = true
            res.render('frontendView/mp/add', { dest, member })
        } else {
            res.render('frontendView/mp/add', { dest })
        }
    })
}