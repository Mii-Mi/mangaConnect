const Comments = require('../../models/Comments');

module.exports = async (req, res) => {

    const comment = await Comments.findById(req.params.commentId);

    if (req.flash('data')[0] == 'admin') {
        const admin = true
        res.render('frontendView/comments/edit', { comment, admin })
    } else if (req.flash('data')[0] == 'member') {
        const member = true
        res.render('frontendView/comments/edit', { comment, member })
    } else {
        res.render('frontendView/comments/edit', { comment })
    }

}