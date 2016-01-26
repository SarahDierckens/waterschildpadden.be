var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/indexPage');
});

addRoutesForIntroPages();

/* GET introPages. */
function addRoutesForIntroPages() {
    var navigations = require('../data/navigation.json')['navigationTree'];

    Object.keys(navigations).forEach(function(key) {
        addIntroRoute(navigations[key]);
    });

    function addIntroRoute(navigation) {
        router.get(navigation.route, function (req, res, next) {
            res.render('pages/introPage', {
                content: getShortDescriptions(req.path)
            });
        });
    }
}

module.exports = router;


//---------------helper functions-----------------------//
function getShortDescriptions(path) {
    return require('../data/shortDescriptions.json')[trimPath(path)]

    function trimPath(path) {
        return path.substring(path.lastIndexOf('/') + 1)
    }
}
