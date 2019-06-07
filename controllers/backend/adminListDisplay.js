const Users = require('../../models/Users')

module.exports = async (req, res) => {
    await Users.find({ userGroup: 0 }, (error, adm) => {

        const admin = true
        res.render('backendView/adminList', { adm, admin })

    })
}