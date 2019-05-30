const express = require('express'),
      router = express.Router()


// ########################
//       Middlewares    
// ########################

    // Users
const auth = require('../middlewares/auth'),
      uName = require('../middlewares/usrLocalsName')

router.use(uName)

// ########################
//       Controllers    
// ########################

    // Map
const welcome = require('../controllers/frontend/welcome'),

    // Users
      userCreate = require('../controllers/frontend/userCreate'),
      userLogin = require('../controllers/frontend/userLogin'),
      userLogout = require('../controllers/frontend/userLogout'),

    // Articles
      articleAdd = require('../controllers/frontend/articleAdd'),
      articleCreate = require('../controllers/frontend/articleCreate'),
      articleSingle = require('../controllers/frontend/articleSingle'),
      articleEdit = require('../controllers/frontend/articleEdit'),
      articleUpdate = require('../controllers/frontend/articleUpdate'),
      articleDelete = require('../controllers/frontend/articleDelete')

// ########################
//         Routes       
// ########################

    // Map
router.get('/', welcome)

    // Users
router.post('/users/add', userCreate)
router.post('/users/login', userLogin)
router.get('/users/logout', auth, userLogout)

    // Articles
router.get('/articles/add', auth, articleAdd)
router.post('/articles/create', auth, articleCreate)
router.get('/articles/single/:articleId', articleSingle)
router.get('/articles/edit/:articleId', auth, articleEdit)
router.post('/articles/update/:articleId', auth, articleUpdate)
router.get('/articles/delete/:articleId', auth, articleDelete)

module.exports = router;