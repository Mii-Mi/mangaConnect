const MpResp = require('../../models/MpResp'),
      Users = require('../../models/Users'),
      dateFormat = require('dateformat')

module.exports = (req, res) => {
    let time = Date.now()

    Users.findById(req.session.userId, (error, user) => {
        // console.log(req.flash('data')[0]);
        if (error) {
            console.log(error);
        }

        MpResp.create(
            {
                ...req.body,
                senderName: user.userName,
                senderId: user._id,
                mpId: req.params.mpId,
                formatDate: (dateFormat(time, "dd mm yyyy à HH:MM:ss"))
            },
            (error, mpResp) => {
                if (error) {
                    console.log(error);
                    req.flash('error', 'Erreur lors de la création du commentaire');
                } else {
                    req.flash('success', 'Commentaire créé avec succes !');
                }
                res.redirect(`/mp/display/${mpResp.mpId}#${mpResp._id}`)
            }
        )
    })
}