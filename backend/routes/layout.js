const express = require('express');
const router = express.Router();
const Layout = require('../models/Layout');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//Fetch all the notes using get '/api/notes/fetchalllayout' 
router.get('/fetchalllayout', fetchuser, async (req, res) => {
    try {
        const layouts = await Layout.find({ user: req.user.id }) 
        res.json(layouts)
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
})

//Add notes using post '/api/notes/addlayout'
router.post('/addlayout', [
    body('fname', 'Enter a valid title minimum length 3').isLength({ min: 3 }),
    body('email', 'enter a valid Email').isEmail(),
    body('phone', 'Phone number not less then 11 number').isLength({ min: 11 }),
],fetchuser, async (req, res) => {
    try {
        const { fname, date, email, phone } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const layout = new Layout({
            fname,date, email, phone, user: req.user.id
        })
        const saveLayout = await layout.save();
        res.json([saveLayout])
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }

})


module.exports = router