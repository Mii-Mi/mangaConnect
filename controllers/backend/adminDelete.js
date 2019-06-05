const Users = require('../../models/Users')

module.exports = (req, res) => {

    console.log(req.params.userId);

    const query = { _id: req.params.userId };

    Users.findOneAndUpdate(
        query,
        {
            userGroup: 1
        },
        { useFindAndModify: false },
        (error, user) => {
            if (error) {
                req.flash('error', 'La modification a échoué, veuillez réessayer.')
                console.log(error);
            } else {
                req.flash('success', `Félicitations ! Vous êtes fâché à vie avec ${user.userName} !`)
            }

            return res.redirect(`/users/profile/${req.params.userId}`)
        }
    )
}