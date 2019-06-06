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

        for(i=0; i < mp.length; i++){

            console.log(mp[i].tStamp);
            console.log(req.session.lastVisit);
            console.log(req.session['read'+ mp[i]._id]);
            

            if(mp[i].tStamp >= req.session.lastVisit){
                if(req.session['read'+ mp[i]._id] && req.session['read'+ mp[i]._id] >= mp[i].tStamp){

                    mp[i] = {
                        _id: mp[i]._id,
                        title: mp[i].title,
                        content: mp[i].content,
                        author: mp[i].author,
                        authorId: mp[i].authorId,
                        dest: mp[i].dest,
                        destId: mp[i].destId,
                        formatDate: mp[i].formatDate,
                        read: true
                    }
                }
            }else{
                mp[i] = {
                    _id: mp[i]._id,
                    title: mp[i].title,
                    content: mp[i].content,
                    author: mp[i].author,
                    authorId: mp[i].authorId,
                    dest: mp[i].dest,
                    destId: mp[i].destId,
                    formatDate: mp[i].formatDate,
                    read: true
                }
            }
        }

        res.render('frontendView/mp/list', {mp})
    })
}