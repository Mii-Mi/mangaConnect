const express = require('express'),
      router = express.Router()


// ########################
//       Controllers    
// ########################

    // Map
const welcome = require('../controllers/frontend/welcome')

// ########################
//         Routes       
// ########################

    // Map
router.get('/', welcome)

module.exports = router;