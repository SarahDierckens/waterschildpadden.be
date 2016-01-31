var express = require('express');
var router = express.Router();

var navigations = require('../data/navigation.json');
var navigationTree = navigations.navigationTree;


module.exports = {
    getRouter: function (randomNavigations) {
        return getRouter(randomNavigations);
    }
};

//-------------------------------------------------//
function getRouter(randomNavigations) {

    addRouteForHomePage();
    addRoutesForNavigationTree();
    addRoutesForSingleNavigations();
    addRedirectionRouteForAllOtherRoutes();

    return router;

    function addRouteForHomePage() {
        /* GET home page. */
        router.get('/', function (req, res, next) {
            res.render('pages/indexPage', {
                randomNavigations: filterNavigationsRandomly(randomNavigations, 5),
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
                    randomNavigations: filterNavigationsRandomly(randomNavigations, 5, generateIdsToExclude(navigation)),
                    metaData: {
                        description: navigation.metaData.description
                    }
                });
            });
            function generateIdsToExclude(navigation) {
                idsToExclude = [navigation.id];
                navigation.subNavigations.forEach(function (subNav) {
                    idsToExclude.push(subNav.id);
                });
                return idsToExclude;
            }
        }

        /* GET subNavigationPages - contentPages */
        function addRoutesForSubNavigationPAges(navigation) {
            navigation.subNavigations.forEach(function (subNavigation) {
                router.get(navigation.route + subNavigation.route, function (req, res, next) {
                    res.render('pages/contentSubPage', {
                        activeNavigation: navigation,
                        activeSubNavigation: subNavigation,
                        randomNavigations: filterNavigationsRandomly(randomNavigations, 5, [subNavigation.id, navigation.id]),
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
        Object.keys(navigations.singleNavigations).forEach(function (key) {
            var singleNavigation = navigations.singleNavigations[key];
            router.get(singleNavigation.route, function (req, res) {
                res.render('pages/' + singleNavigation.id, {
                    activeNavigation: singleNavigation,
                    randomNavigations: filterNavigationsRandomly(randomNavigations, 5),
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
}

//--------------------helper methods ----------------------//

function filterNavigationsRandomly(randomNavigations, totalCount, navigationIdsToExclude) {
    var filteredNavigations = [];
    var randomNavigationIds = Object.keys(randomNavigations);

    for (i = 0; i < totalCount; i++) {
        var randomId = randomNavigationIds[Math.floor(Math.random() * randomNavigationIds.length)];

        if (navigationIdsToExclude && navigationIdsToExclude.indexOf(randomId) > -1) {
            totalCount++;
        } else {
            filteredNavigations.push(randomNavigations[randomId]);
        }
        randomNavigationIds.splice(randomNavigationIds.indexOf(randomId), 1);
    }
    return filteredNavigations;
}