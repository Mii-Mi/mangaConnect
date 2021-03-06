const Mp = require('../../models/Mp'),
      MpResp = require('../../models/MpResp')

module.exports = (req, res) => {

    Mp.findById(
        req.params.id,
        async (error, mp) => {
            if (error){
                console.log(error);
            }

            let isOwner = false

            if (mp.authorId === req.session.userId){
                isOwner = true;
            }

            await MpResp.find({mpId: req.params.id}, (error, mpResp) => {
                if (error) {
                    console.log(error);
                }
                for (i = 0; i < mpResp.length; i++) {
                    if (mpResp[i].senderId === req.session.userId) {

                        mpResp[i] = {
                            _id: mpResp[i]._id,
                            content: mpResp[i].content,
                            senderName: mpResp[i].senderName,
                            senderId: mpResp[i].senderId,
                            mpId: mpResp[i].mpId,
                            createDate: mpResp[i].createDate,
                            formatDate: mpResp[i].formatDate,
                            isCommentOwner: true
                        }
                    }
                }

                req.session[`read`+ req.params.id] = Date.now()

                if (isOwner || mp.destId === req.session.userId) {

                    if (req.flash('data')[0] == 'admin') {
                        const admin = true
                        res.render('frontendView/mp/displaySingle', { mp, isOwner, mpResp, admin })
                    } else if (req.flash('data')[0] == 'member') {
                        const member = true
                        res.render('frontendView/mp/displaySingle', { mp, isOwner, mpResp, member })
                    } else {
                        res.render('frontendView/mp/displaySingle', { mp, isOwner, mpResp })
                    }

                }else{
                    req.flash('error', 'Vous n\'êtes pas autorisé à voir cette conversation !')
                    res.redirect('/')
                }
            })
        }
    ) 
}