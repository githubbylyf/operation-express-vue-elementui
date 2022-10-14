var express = require('express');
router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../data.json'), 'UTF-8', (err, data) => {
        res.json(JSON.parse(data));
    })
});

module.exports = router;