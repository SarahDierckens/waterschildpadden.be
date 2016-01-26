var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/indexPage', { title: 'Waterschildpadden' });
});

/* GET home page. */
router.get('/*', function(req, res, next) {
    res.render('pages/introPage', {
        title: 'Waterschildpadden',
        content: getPageContent(req.path)
    });
});

module.exports = router;


//---------------helper functions-----------------------//
function getPageContent(path) {
    var navigation = trimPath(path);
    return require('../data/content.json')[navigation];

    function trimPath(path) {
        return path.substring(path.lastIndexOf('/')+1);
    }
}
