const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const result = {
        version: "HTML5",
        title: "hello world",
        headingNumber: 10,
        headingLevel: "H1",
        pictureNumber: 5,
        largestPicture: "picture.jpg",
        linksIntCount: 3,
        linksExtCount: 1,
        inaccesibleLink: 1,
        loadingTime: 120,
        httpStatus: "200"
    };

    res.json(result);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST route')
})

module.exports = router;