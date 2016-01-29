var navigationTree = require('../navigation.json')['navigationTree'];

describe('navigationTree', function () {
    it('should not be undefined and contain some properties', function () {
        expect(navigationTree).not.toBeUndefined();
        expect(Object.keys(navigationTree)).not.toBeUndefined();
        expect(Object.keys(navigationTree).length).not.toBe(0);
    });

    Object.keys(navigationTree).forEach(function (key) {
        var navigation = navigationTree[key];
        describe(key, function () {
            it('should contain an ID for every navigation in the navigationTree', function () {
                expect(navigation.hasOwnProperty('id')).toBe(true);
                expect(navigation['id']).not.toBeUndefined();

            });

            it('should contain a ROUTE WITH A SLASH for every navigation in the navigationTree', function () {
                expect(navigation.hasOwnProperty('route')).toBe(true);
                expect(navigation['route']).not.toBeUndefined();
                expect(navigation['route'].lastIndexOf('/')).not.toBe(-1);
                expect(navigation['route'].indexOf('/')).toBe(0);
            });


            it('should contain an TITLE for every navigation in the navigationTree', function () {
                expect(navigation.hasOwnProperty('title')).toBe(true);
                expect(navigation['title']).not.toBeUndefined();
            });

            it('should contain SUB_NAVIGATIONS for every navigation in the navigationTree', function () {
                expect(navigation.hasOwnProperty('subNavigations')).toBe(true);
                expect(navigation['subNavigations']).not.toBeUndefined();
                expect(navigation['subNavigations'].length).not.toBe(0);
            });

            it('should contain a TEASER_TEXT for every navigation in the navigationTree', function () {
                expect(navigation.hasOwnProperty('teaserText')).toBe(true);
                expect(navigation['teaserText']).not.toBeUndefined();
            });

            it('should navigation a CONTENT property', function () {
                expect(navigation.hasOwnProperty('content'));
                expect(navigation['content']).not.toBeUndefined();
            });
            it('should contain a METADATA-DESCRIPTION', function () {
                expect(navigation.hasOwnProperty('metaData'));
                expect(navigation.metaData.hasOwnProperty('description'));
                expect(navigation.metaData.description).not.toBeUndefined();
            });

            navigation['subNavigations'].forEach(function (subNavigation) {
                describe('subNavigation: ' + subNavigation.id, function () {
                    it('should contain an ID for every subNavigation in the navigationTree', function () {
                        expect(subNavigation.hasOwnProperty('id')).toBe(true);
                        expect(subNavigation['id']).not.toBeUndefined();

                    });

                    it('should contain a ROUTE WITH A SLASH for every subNavigation in the navigationTree', function () {
                        expect(subNavigation.hasOwnProperty('route')).toBe(true);
                        expect(subNavigation['route']).not.toBeUndefined();
                        expect(subNavigation['route'].lastIndexOf('/')).not.toBe(-1);
                        expect(subNavigation['route'].indexOf('/')).toBe(0);
                    });


                    it('should contain an TITLE for every subNavigation in the navigationTree', function () {
                        expect(subNavigation.hasOwnProperty('title')).toBe(true);
                        expect(subNavigation['title']).not.toBeUndefined();
                    });

                    it('should contain a TEASER TITLE', function () {
                        expect(subNavigation.hasOwnProperty('teaserTitle'));
                        expect(subNavigation['teaserTitle']).not.toBeUndefined();
                    });

                    it('should contain a SUB TEASER TITLE', function () {
                        expect(subNavigation.hasOwnProperty('teaserSubTitle'));
                        expect(subNavigation['teaserSubTitle']).not.toBeUndefined();
                    });
                    it('should contain a METADATA-DESCRIPTION', function () {
                        expect(subNavigation.hasOwnProperty('metaData'));
                        expect(subNavigation.metaData.hasOwnProperty('description'));
                        expect(subNavigation.metaData.description).not.toBeUndefined();
                    });
                });
            });
        })
    })
});
