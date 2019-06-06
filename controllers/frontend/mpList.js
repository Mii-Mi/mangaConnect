const Mp = require('../../models/Mp'),
      Users = require('../../models/Users')

module.exports = async (req, res) => {

    if (!req.session.lastVisit){
        const usr = await Users.findById(req.session.userId)
        
        if(usr.lastVisit){
            req.session.lastVisit = usr.lastVisit
        }else{
            req.session.lastVisit = 0
        }
        Users.findByIdAndUpdate(req.session.userId, {lastVisit:  Date.now()}, (err, mem) => {
            if (err) {
                console.log(err);
            }
        })
    }else{
        Users.findByIdAndUpdate(req.session.userId, { lastVisit: Date.now() }, (err, mem) => {
            if (err) {
                console.log(err);
            }
        })
    }


    await Mp.find({ $or:[ {'authorId': req.params.userId}, {'destId': req.params.userId} ]}, null, {sort:{_id: -1}}, (error, mp) => {
        res.render('frontendView/mp/list', {mp})
    })
}