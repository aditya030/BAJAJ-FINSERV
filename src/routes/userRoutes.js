const express = require('express');

const router = new express.Router();

router.get("/",  (req, res) => {
    res.status(200).json({ message : "Up" });
})

// GET route to return the operation code
router.get('/bfhl', (req, res) => {
    try {
        res.status(200).json({ operation_code: 1 });
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
});

// POST route to process the input data
router.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "Aditya_Sinha_03072003";
    const email = "aditya.sinha2021@vitstudent.ac.in";
    const roll_number = "21BKT0022";

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    
   
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
    const highest_alphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

module.exports = router;
