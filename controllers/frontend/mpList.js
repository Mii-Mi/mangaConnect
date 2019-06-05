const Mp = require('../../models/Mp')

module.exports = async (req, res) => {
    await Mp.find({ $or:[ {'authorId': req.params.userId}, {'destId': req.params.userId} ]}, null, {sort:{_id: -1}}, (error, mp) => {
        res.render('frontendView/mp/list', {mp})
    })
}