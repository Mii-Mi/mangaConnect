const Conv = require('../../models/Mp'),
      Mp = require('../../models/MpMsg')

module.exports = async (req, res) => {

    Conv.findById(req.params.convId)


    await Mp.find(
        {
            senderId: req.params.senderId,
            destId: req.params.desId
        },
        (error, mp) => {
            if (error){
                console.log(error);
            }
            for (i = 0; i < mp.length; i++) {
                if (mp[i].senderId === req.session.userId) {

                    comment[i] = {
                        title: mp[i].title,
                        content: mp[i].content,
                        senderName: mp[i].senderName,
                        senderId: mp[i].senderId,
                        destName: mp[i].destName,
                        destId: mp[i].desId,
                        createDate: mp[i].createDate,
                        formatDate: mp[i].formatDate,
                        isCommentOwner: true
                    }
                }
            }
            res.render('frontendView/users/private', {mp})
        }) 
    
}