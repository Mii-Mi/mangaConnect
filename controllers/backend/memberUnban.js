const Users = require('../../models/Users')

module.exports = (req, res) => {
    Users.findByIdAndUpdate(
        req.params.userId,
        { userGroup: 1,
          banCause: null },
        (error, member) => {
            if (error) {
                req.flash('error', 'L\' amnistie échoué, veuillez réessayer.')
                console.log(error);
                return res.redirect(`/users/profile/${req.params.userId}`)
            } else {
                req.flash('success', `${member.userName} a bien été amnistié !`)
                res.redirect(`/users/profile/${req.params.userId}`)
            }
        }
    )
}