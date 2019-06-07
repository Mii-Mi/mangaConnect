const Users = require('../../models/Users');

module.exports = async (req, res) => {

    const usr = await Users.findById(req.params.userId);

    res.render('frontendView/users/profileEdit', { usr })

}