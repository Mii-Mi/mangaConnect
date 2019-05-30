const express = require('express'),
      router = express.Router()


// ########################
//       Controllers    
// ########################

    // Map
const welcome = require('../controllers/frontend/welcome'),

    // Users
      userCreate = require('../controllers/frontend/userCreate'),
      userLogin = require('../controllers/frontend/userLogin'),
      userLogout = require('../controllers/frontend/userLogout')

// ########################
//         Routes       
// ########################

    // Map
router.get('/', welcome)

    // Users
router.post('/users/add', userCreate)
router.post('/users/login', userLogin)
router.get('/users/logout', userLogout)

module.exports = router;