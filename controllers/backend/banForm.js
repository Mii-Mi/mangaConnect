const Users = require('../../models/Users')

module.exports = (req, res) => {

    Users.findById(req.params.userId, (err, banned) => {

        if (err){
            console.log(err);
        }
        const admin = true
        res.render('backendView/banForm', { banned, admin })
    })
}