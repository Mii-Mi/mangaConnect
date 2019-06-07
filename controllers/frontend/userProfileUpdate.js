const Users = require('../../models/Users')


module.exports = (req, res) => {

    const query = { _id: req.params.userId };

    Users.findOneAndUpdate(
        query,
        {
            ...req.body,
        },
        (error, usr) => {
            if (error) {
                req.flash('error', 'La modification a échoué, veuillez réessayer.')
                console.log(error);
                return res.redirect(`/users/profile/edit/${req.params.userId}`)
            } else {
                req.flash('success', 'Article modifié avec succès.')
                res.redirect(`/users/profile/${req.params.userId}`)
            }
        }
    )
}