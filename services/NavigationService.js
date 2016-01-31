function getNavigationTeasers() {
    var navigations = require('../data/navigation.json');
    var navigationTree = navigations.navigationTree;
    var navigationTeasers = {};

    Object.keys(navigationTree).forEach(function (key) {
        var nav = navigationTree[key];
        nav.subNavigations.forEach(function (subNav) {
            addToNavigationTeasers(subNav, nav.route);
        });

        function addToNavigationTeasers(aNav, mainRoute) {
            var route = aNav.route;
            if (mainRoute) {
                route = mainRoute + route;
            }
            navigationTeasers[aNav.id] = {
                "route": route,
                "teaserTitle": aNav.teaserTitle,
                "teaserSubTitle": aNav.teaserSubTitle
            };
        }
    });
    return navigationTeasers;
};

module.exports = {
    getNavigationTeasers: function() {
        return getNavigationTeasers();
    }
};