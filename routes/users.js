const express = require('express');
const router = express.Router();
const createUser = require('../controllers/userControler.js');



//render our home page 
router.get('/', (req,res)=>{
    res.render('home'); 
});

//post route  to create a new user
router.post('/users', createUser);






module.exports = router;