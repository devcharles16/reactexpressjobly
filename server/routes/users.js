const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json([
        {
            username:' DeeCode',
            age: 26
        },
        {
            username: 'mike',
            age: 32
        }
    ])
}
)


module.exports = router;