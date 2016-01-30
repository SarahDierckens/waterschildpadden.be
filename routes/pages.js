var express = require('express');
var router = express.Router();

var navigations = require('../data/navigation.json');
var navigationTree = navigations.navigationTree;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/indexPage', {
        metaData: {
            description: navigations.homePage.metaData.description
        }
    });
});

addRoutesFromNavigationTree();

function addRoutesFromNavigationTree() {
    Object.keys(navigationTree).forEach(function (key) {
        addIntroRoute(navigationTree[key]);
        addRoutesForSubNavigationPAges(navigationTree[key])
    });

    /* GET introPages. */
    function addIntroRoute(navigation) {
        router.get(navigation.route, function (req, res, next) {
            res.render('pages/introPage', {
                activeNavigation: navigation,
                metaData: {
                    description: navigation.metaData.description
                }
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
                    content: require('../data/pages/' + navigation.id + '/' + subNavigation.id + '.json'),
                    metaData: {
                        description: subNavigation.metaData.description
                    }
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