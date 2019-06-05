const Mp = require('../../models/Mp')

module.exports = async (req, res) => {

    Mp.findById(
        req.params.id,
        (error, mp) => {
            if (error){
                console.log(error);
            }
            console.log(mp);
            
            res.render('frontendView/users/private', {mp})
        }) 
    
}