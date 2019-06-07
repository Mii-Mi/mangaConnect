const Users = require('../../models/Users')

module.exports = async (req, res) => {
    await Users.find({userGroup: 3}, (error, banned) => {

        const admin = true
        res.render('backendView/banList', { banned, admin })
        
    })
}