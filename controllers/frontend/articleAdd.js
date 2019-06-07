module.exports = (req, res) => {

    if (req.flash('data')[0] == 'admin') {
        const admin = true
        res.render('frontendView/articles/add', {admin})
    } else if (req.flash('data')[0] == 'member') {
        const member = true
        res.render('frontendView/articles/add', {member})
    } else {
        res.render('frontendView/articles/add')
    }
}