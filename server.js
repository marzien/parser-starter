const express = require('express');

const app = express();

app.get('/api/parser', (req, res) => {
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

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));