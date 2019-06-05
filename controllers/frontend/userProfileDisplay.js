const Users = require('../../models/Users'),
      Articles = require('../../models/Articles')

module.exports = (req, res) => {
    let isOwner = false,
        userIsAdmin = false,
        userIsBanned = false

    Users.findById(req.params.authorId, async (error, usr) => {
        // console.log(req.flash('data')[0]);
        if(error) {
            console.log(error);
        }
        
        if (req.session.userId === req.params.authorId){
            isOwner = true
        }
        if (usr.userGroup === 0) {
            userIsAdmin = true
        }else if (usr.userGroup === 3) {
            userIsBanned = true
        }
        
        await Articles.find({author: usr.userName}, (error, article) => {

            if (req.flash('data')[0] == 'admin') {
                const admin = true
                res.render('frontendView/users/profile', { usr, admin, isOwner, userIsAdmin, userIsBanned, article });
            } else if (req.flash('data')[0] == 'member') {
                const member = true
                res.render('frontendView/users/profile', { usr, member, isOwner, userIsAdmin, userIsBanned, article });
            } else {
                res.render('frontendView/users/profile', { usr, isOwner, userIsAdmin, userIsBanned, article });
            }
        })
    })
}