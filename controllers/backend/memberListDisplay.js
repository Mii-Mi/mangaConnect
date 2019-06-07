const Users = require('../../models/Users')

module.exports = async (req, res) => {
    await Users.find({ userGroup: 1 }, (error, member) => {

        const admin = true
        res.render('backendView/memberList', { admin, member })

    })
}