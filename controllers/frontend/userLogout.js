module.exports = (req, res) => {
    req.flash('success', 'Vous êtes maintenant déconnecté !');
    req.session.destroy()
    res.redirect('/')
}