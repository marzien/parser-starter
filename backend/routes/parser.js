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
    if(validURL(req.body.url)) {

    } else {
        console.log('Not valid URL link')
    };







    const result = {
        version: "",
        title: "",
        headingNumber: 0,
        headingLevel: "",
        pictureNumber: 0,
        largestPicture: "",
        linksIntCount: 0,
        linksExtCount: 0,
        inaccesibleLink: 0,
        loadingTime: 0,
        httpStatus: "200"
    };

    res.json(result)
})

validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

module.exports = router;