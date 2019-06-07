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
      userProfileEdit = require('../controllers/frontend/userProfileEdit'),
      userProfileUpdate = require('../controllers/frontend/userProfileUpdate'),

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
      mpDisplay = require('../controllers/frontend/mpdisplay'),
      mpEdit = require('../controllers/frontend/mpEdit'),
      mpUpdate = require('../controllers/frontend/mpUpdate'),
      mpDelete = require('../controllers/frontend/mpDelete'),
      mpList = require('../controllers/frontend/mpList'),
      mpRespCreate = require('../controllers/frontend/mpRespCreate'),
      mpRespEdit = require('../controllers/frontend/mpRespEdit'),
      mpRespUpdate = require('../controllers/frontend/mpRespUpdate'),
      mpRespDelete = require('../controllers/frontend/mpRespDelete')

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
router.get('/users/profile/edit/:userId', auth, userProfileEdit)
router.post('/users/profile/update/:userId', auth, userProfileUpdate)

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
router.post('/mp/create/:destId/:dest', mpCreate)
router.get('/mp/edit/:mpId', auth, mpEdit)
router.post('/mp/update/:mpId', auth, mpUpdate)
router.get('/mp/delete/:mpId', auth, mpDelete)
router.get('/mp/display/:id', auth, mpDisplay)
router.get('/mp/list/:userId', auth, mpList)
router.post('/mp/response/create/:mpId', auth, mpRespCreate)
router.get('/mp/response/edit/:mpRespId', auth, mpRespEdit)
router.post('/mp/response/update/:mpRespId', auth, mpRespUpdate)
router.get('/mp/response/delete/:mpRespId/:mpId', auth, mpRespDelete)

module.exports = router;