const express = require('express')

const router = express.Router()

router
    .route('/')
    // Get user details
    .get(async (req, res) => {
        let personalDetails = await global.Personal.find({ userID: req.user._id })

        res.json(personalDetails)
    })

module.exports = router
