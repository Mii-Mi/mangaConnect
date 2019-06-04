const Articles = require('../../models/Articles')

module.exports = async(req, res) => {

    await Articles.find({}, (error, article) => {
        if (error) {
            console.log(error);
        }

        if (req.flash('data')[0] == 'admin') {
            const admin = true
            res.render('index', { admin, article });
        } else if (req.flash('data')[0] == 'member') {
            const member = true
            res.render('index', { member, article });
        } else {
            res.render('index', {article});
        }
    }) 
}