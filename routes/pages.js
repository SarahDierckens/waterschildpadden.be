var express = require('express');
var router = express.Router();

var navigations = require('../data/navigation.json');
var navigationTree = navigations.navigationTree;



addRouteForHomePage();
addRoutesForNavigationTree();
addRoutesForSingleNavigations();
addRedirectionRouteForAllOtherRoutes();

module.exports = router;

//-------------------------------------------------//

function addRouteForHomePage() {
    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('pages/indexPage', {
            metaData: {
                description: navigations.homePage.metaData.description
            }
        });
    });
}

function addRoutesForNavigationTree() {
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

function addRoutesForSingleNavigations() {
 Object.keys(navigations.singleNavigations).forEach(function(key){
     var singleNavigation = navigations.singleNavigations[key];
     router.get(singleNavigation.route, function (req, res) {
         res.render('pages/' + singleNavigation.id, {
             activeNavigation: singleNavigation,
             metaData: {
                description: singleNavigation.metaData.description
             }
         });
     })
 })
}

function addRedirectionRouteForAllOtherRoutes() {
    /*GET all the rest - redirect to HomePage */
    router.get('/*', function (req, res, next) {
        res.redirect('/');
    });
}