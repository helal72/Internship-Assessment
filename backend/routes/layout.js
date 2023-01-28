const express = require('express');
const router = express.Router();
const Layout = require('../models/Layout');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
//const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//Fetch all the notes using get '/api/notes/fetchalllayout' 
router.get('/fetchalllayout', async (req, res) => {
    try {
        const layouts = await Layout.find({}) 
        res.json(layouts)
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
})

//Add notes using post '/api/notes/addlayout'

router.post('/addlayout', [
    body('productName', 'Enter a valid Product name at lest 3 length').isLength({ min: 3 }),
    body('sku', 'enter a valid sku').isLength({ min: 3}),
    body('phone', 'Phone number not less then 11 number').isLength({ min: 11 }),
], upload.array('files', 12), async (req, res) => {
    console.log(req.body,req.file)
    try {
        const { productName, sku, category, size, color, sDiscription, lDescription, phone, file} = req.body
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const layout = new Layout({
            productName,sku, category, size, color, sDiscription, lDescription, phone, file
        })
        const saveLayout = await layout.save();
        res.json([saveLayout])
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }

})


module.exports = router