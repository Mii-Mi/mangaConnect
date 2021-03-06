const Users = require('../../models/Users')

module.exports = (req, res) => {
    Users.findByIdAndUpdate(
        req.params.userId,
        { userGroup: 3,
          banCause: req.body.content },
        (error, banned) => {
            if (error) {
                req.flash('error', 'La mise au ban a échoué, veuillez réessayer.')
                console.log(error);
                return res.redirect(`/users/profile/${req.params.userId}`)
            } else {
                req.flash('success', `${banned.userName} a bien été banni !`)
                res.redirect('/ban/list/display')
            }
        }
    )
}