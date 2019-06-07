const Users = require('../../models/Users');

module.exports = async (req, res) => {

    const usr = await Users.findById(req.params.userId);

    if (req.flash('data')[0] == 'admin') {
        const admin = true
        res.render('frontendView/users/profileEdit', { usr, admin })
    } else if (req.flash('data')[0] == 'member') {
        const member = true
        res.render('frontendView/users/profileEdit', { usr, member })
    } else {
        res.render('frontendView/users/profileEdit', { usr })
    }

}