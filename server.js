const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/api/parser', (req, res) => {
    console.log(req.body);
    // TODO: why { URL: '' }
})

app.listen(port, () => console.log(`Server started on port ${port}`));