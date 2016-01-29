var express = require('express');
var router = express.Router();
var navigations = require('../data/navigation.json')['navigationTree'];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/indexPage');
});

addRoutesFromNavigationTree();

function addRoutesFromNavigationTree() {
    Object.keys(navigations).forEach(function (key) {
        addIntroRoute(navigations[key]);
        addRoutesForSubNavigationPAges(navigations[key])
    });

    /* GET introPages. */
    function addIntroRoute(navigation) {
        router.get(navigation.route, function (req, res, next) {
            res.render('pages/introPage', {
                activeNavigation: navigation
            });
        });
    }

    /* GET subNavigationPages - contentPages */
    function addRoutesForSubNavigationPAges(navigation) {
        navigation.subNavigations.forEach(function (subNavigation) {
            router.get(navigation.route + subNavigation.route, function (req, res, next) {
                res.render('pages/contentSubPage', {
                    activeNavigation: navigation,
                    activeSubNavigation: subNavigation,
                    content: require('../data/pages/' + navigation.id + '/' + subNavigation.id + '.json')
                })
            })
        })
    }
}


/*GET all the rest - redirect to HomePage */
router.get('/*', function (req, res, next) {
    res.redirect('/');
});

module.exports = router;


//---------------helper functions-----------------------//
//function getShortDescriptions(path) {
//    return require('../data/shortDescriptions.json')[trimPath(path)];
//
//    function trimPath(path) {
//        return path.substring(path.lastIndexOf('/') + 1)
//    }
//}
