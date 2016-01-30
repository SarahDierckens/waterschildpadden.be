var app = require("../app");
var request = require("supertest")(app);

describe("Existing API GET methods", function () {
        describe("GET /", function () {
            it("returns status code 200", function (done) {
                request.get("/")
                    .expect(200, done);
            });

            it("returns data", function (done) {
                var reponse = request.get("/");

                verifySuccess(reponse)
                    .expect(function (res) {
                        if (res.text.indexOf('<title>Waterschildpadden</title>') === -1) {
                            throw new Error("title Waterschildpadden be there!");
                        }
                    })
                    .end(done);
            });
        });

        describe("GET Navigations", function () {
            it("for aanschaf", function (done) {
                var response = request.get("/aanschaf");
                verifySuccess(response)
                    .expect(function (res) {
                        if (res.text.indexOf('<title>Waterschildpadden</title>') !== -1) {
                            throw new Error("title Waterschildpadden should not be there!");
                        }
                    })
                    .end(done)
            });
            it("for huisvesting", function (done) {
                var response = request.get("/huisvesting");
                verifySuccess(response)
                    .expect(function (res) {
                        if (res.text.indexOf('<title>Waterschildpadden</title>') !== -1) {
                            throw new Error("title Waterschildpadden should not be there!");
                        }
                    })
                    .end(done)
            });
            it("for soorten", function (done) {
                var response = request.get("/soorten");
                verifySuccess(response)
                    .expect(function (res) {
                        if (res.text.indexOf('<title>Waterschildpadden</title>') !== -1) {
                            throw new Error("title Waterschildpadden should not be there!");
                        }
                    })
                    .end(done)
            });
            it("verzorging", function (done) {
                var response = request.get("/verzorging");
                verifySuccess(response)
                    .expect(function (res) {
                        if (res.text.indexOf('<title>Waterschildpadden</title>') !== -1) {
                            throw new Error("title Waterschildpadden should not be there!");
                        }
                    })
                    .end(done)
            });
        });

        describe("Get SubNavigations", function () {
            var navigationTree = require("../data/navigation.json")['navigationTree'];
            Object.keys(navigationTree).forEach(function (key) {
                var navigation = navigationTree[key];
                describe(" for " + navigation.route, function () {
                    navigation.subNavigations.forEach(function (subNavigation) {
                        it(subNavigation.route, function (done) {
                            var result = request.get(navigation.route + subNavigation.route);
                            verifySuccess(result)
                                .expect(function (res) {
                                    if (!containsAllSubstrings(res.text, ["<title>" + subNavigation.title + " - " + navigation.title])) {
                                        throw new Error("subNav should contain the correct title!");
                                    }
                                })
                                .end(done)
                        });
                    });
                    var randomString = getRandomPathReq();
                    it(randomString, function (done) {
                        request.get(navigation.route + randomString)
                            .expect(302)
                            .end(done)
                    })
                });
            });
        });

        describe("An unknown path ", function () {
            var randomString = getRandomPathReq();
            it(randomString + " should be redirected to /", function (done) {
                request.get(randomString)
                    .expect(302)
                    .expect(function (res) {
                        if (res.redirect === false) {
                            throw new Error("function should redirect")
                        }
                        if (res.header.location !== "/") {
                            throw new Error("should redirect to /")
                        }
                    })
                    .end(done)
            });
        });

        describe("GET SingleNavigations", function () {
            var singleNavigations = require("../data/navigation.json")['singleNavigations'];

            Object.keys(singleNavigations).forEach(function (key) {
                var navigation = singleNavigations[key];
                it("returns data for " + navigation.route, function (done) {
                    var result = request.get(navigation.route);
                    verifySuccess(result)
                        .expect(function (res) {
                            if (!containsAllSubstrings(res.text, ["<title>" + navigation.title])) {
                                throw new Error(navigation.route + " should have a title with " + navigation.title);
                            }
                        })
                        .end(done);
                });
            });
        });

        //-----------helper functions------------------//
        function verifySuccess(response) {
            response
                .expect(200)
                .expect(function (res) {
                    if (res.text === undefined) {
                        throw new Error("missing data");
                    }
                    if (!containsAllSubstrings(res.text, ['<html>', '</html>', '<head>', '</head>', '<body>', '</body>', '<header>', '</header>', '<main>', '</main>'])) {
                        throw new Error("the text: " + res.text + ' should contain all basic html tags');
                    }
                });
            return response;
        }

        function containsAllSubstrings(str, items) {
            for (var i in items) {
                var item = items[i];
                if (str.indexOf(item) === -1) {
                    return false;
                }

            }
            return true;
        }

        function getRandomPathReq() {
            return '/' + Math.random().toString(36).substring(7)
        }
    }
)
;