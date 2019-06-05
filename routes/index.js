const express = require('express'),
      router = express.Router()


// ########################
//       Middlewares    
// ########################

    // Users
const auth = require('../middlewares/auth'),
      uName = require('../middlewares/usrLocalsName'),
      testUserGroup = require('../middlewares/testUserGroup')

router.use(uName)
router.use(testUserGroup)

    // Admins
const adminAuth = require('../middlewares/adminAuth')

// ########################
//       Controllers    
// ########################

    // Map
const welcome = require('../controllers/frontend/welcome'),

    // Users
      userCreate = require('../controllers/frontend/userCreate'),
      userLogin = require('../controllers/frontend/userLogin'),
      userLogout = require('../controllers/frontend/userLogout'),
      userProfileDisplay = require('../controllers/frontend/userProfileDisplay'),

    // Articles
      articleAdd = require('../controllers/frontend/articleAdd'),
      articleCreate = require('../controllers/frontend/articleCreate'),
      articleSingle = require('../controllers/frontend/articleSingle'),
      articleEdit = require('../controllers/frontend/articleEdit'),
      articleUpdate = require('../controllers/frontend/articleUpdate'),
      articleDelete = require('../controllers/frontend/articleDelete'),

    // Comments
      commentCreate = require('../controllers/frontend/commentCreate'),
      commentEdit = require('../controllers/frontend/commentEdit'),
      commentUpdate = require('../controllers/frontend/commentUpdate'),
      commentDelete = require('../controllers/frontend/commentDelete'),
    
    // Admins modules
      adminAdd = require('../controllers/backend/adminAdd'),
      adminDelete = require('../controllers/backend/adminDelete'),
      memberBan = require('../controllers/backend/memberBan'),
      memberUnban = require('../controllers/backend/memberUnban'),

    // MP
      mpAdd = require('../controllers/frontend/mpAdd'),
      mpCreate = require('../controllers/frontend/mpCreate'),
      mpDisplay = require('../controllers/frontend/mpdisplay')

// ########################
//         Routes       
// ########################

    // Map
router.get('/', welcome)

    // Users
router.post('/users/add', userCreate)
router.post('/users/login', userLogin)
router.get('/users/logout', auth, userLogout)
router.get('/users/profile/:authorId', userProfileDisplay)

    // Articles
router.get('/articles/add', auth, articleAdd)
router.post('/articles/create', auth, articleCreate)
router.get('/articles/single/:articleId', articleSingle)
router.get('/articles/edit/:articleId', auth, articleEdit)
router.post('/articles/update/:articleId', auth, articleUpdate)
router.get('/articles/delete/:articleId', auth, articleDelete)

    // Comments
router.post('/comments/create/:articleId', auth, commentCreate)
router.get('/comments/edit/:commentId', auth, commentEdit)
router.post('/comments/update/:commentId', auth, commentUpdate)
router.get('/comments/delete/:commentId/:articleId', auth, commentDelete)

    // Admins modules
router.get('/admins/add/:userId',adminAuth, adminAdd)
router.get('/admins/delete/:userId', adminAuth, adminDelete)
router.get('/members/ban/:userId', adminAuth, memberBan)
router.get('/members/unban/:userId', adminAuth, memberUnban)

    // MP
router.get('/mp/add/:destId', mpAdd)
router.post('/mp/create/:destId', mpCreate)
router.get('/mp/display/:senderId/:destId', auth, mpDisplay)

module.exports = router;