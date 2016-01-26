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
                navigation: navigation,
                content: {
                    title: navigation.title,
                    introCaption: "Wil je graag een schildpad in je huis of tuin?",
                    introText: [
                        "Denk dan eerst goed na of je je nieuwe huisdier wel kan bieden wat het verdient, want een schildpad is veel meer dan een hebbedingetje. Informeer ook goed wat voor dier je in huis neemt. Welke soort schildpad is het? Neem ik een mannetje of een vrouwtje?"
                    ]
                }
            });
        });
    }
}

module.exports = router;


//---------------helper functions-----------------------//
//function getShortDescriptions(path) {
//    return require('../data/shortDescriptions.json')[trimPath(path)];
//
//    function trimPath(path) {
//        return path.substring(path.lastIndexOf('/') + 1)
//    }
//}
