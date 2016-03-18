'use strict';

var HomePage = require('../../pages/main-page.js');
var HomeHelper = require('../../helpers/homepage-helper.js');
var helper = new HomeHelper();

describe('Series', function() {
    var page;

    beforeAll(function() {
        browser.ignoreSynchronization = true;
        page = new HomePage();
    });

    it('should display the same number of gridlines as y ticks', function() {
        expect(page.gridlines.isDisplayed()).toBeTruthy();
        page.gridlines.count().then(function(c) {
            page.yTicks.count().then(function(d) {
                expect(c).toEqual(d);
            });
        });
    });

    it('should align gridlines to each y axis tick correctly', function() {
        page.gridlines.each(function(gridline, index) {
            gridline.getAttribute('y1').then(function(t) {
                page.yTicks.get(index).getAttribute('transform').then(function(tickPosition) {
                    expect(tickPosition).toContain(t);
                });
            });
        });
    });

    it('should have the correct stroke width for gridlines', function() {
        page.gridlines.each(function(gridline, index) {
            gridline.getCssValue('stroke-width').then(function(width) {
                expect(width).toEqual(page.gridlineWidth);
            });
        });
    });

    it('should display evenly dispersed gridlines across the y axis to 10 dp', function() {
        var results = [];
        page.gridlines.each(function(gridline) {
            gridline.getAttribute('y1').then(function(thisLine) {
                results.push(thisLine);
            });
        }).then(function() {
            var lastDist = (results[0] - results[1]).toFixed(10);
            var correct = true;
            for (var i = 1; i < results.length - 1; i++) {
                var nextDist = (results[0] - results[1]).toFixed(10);
                correct = !!(lastDist === nextDist && correct === true);
                lastDist = nextDist;
            }
            expect(correct).toBeTruthy();
        });
    });

    it('should have the correct stroke colour for gridlines', function() {
        page.gridlines.each(function(gridline) {
            gridline.getCssValue('stroke').then(function(colour) {
                expect(colour).toEqual(page.gridlineColour);
            });
        });
    });

    it('should display evenly dispersed ticks across the y axis', function() {
        var results = [];
        page.yTicks.each(function(gridline) {
            gridline.getAttribute('transform').then(function(thisLine) {
                var sub = parseFloat(thisLine.substring(13, 25));
                results.push(sub);
            });
        }).then(function() {
            var lastDist = (results[0] - results[1]).toFixed(10);
            var correct = true;
            for (var i = 1; i < results.length - 1; i++) {
                var nextDist = (results[0] - results[1]).toFixed(10);
                correct = !!(lastDist === nextDist && correct === true);
                lastDist = nextDist;
            }
            expect(correct).toBeTruthy();
        });
    });

    it('should have the correct colour for each tick label', function() {
        page.yTicks.each(function(tick) {
            tick.$('text').getCssValue('fill').then(function(colour) {
                expect(colour).toEqual(page.defaultFontColour);
            });
        });
    });

    it('should have the correct size font for each tick label', function() {
        page.yTicks.each(function(tick) {
            tick.$('text').getCssValue('font-size').then(function(colour) {
                expect(colour).toEqual(page.tickLabelSize);
            });
        });
    });

    it('should have the correct colour for the closing tick indicator', function() {
        page.closeTick.$('path').getCssValue('fill').then(function(colour) {
            expect(colour).toEqual(page.closingTickColour);
        });
    });

    it('should have the correct colour for closing tick label', function() {
        page.closeTick.$('text').getCssValue('fill').then(function(colour) {
            expect(colour).toEqual(page.defaultFontColour);
        });
    });

    it('should have the correct colour for the closing tick line', function() {
        page.closeLine.getCssValue('stroke').then(function(colour) {
            expect(colour).toEqual(page.closingTickColour);
        });
    });

    it('should have the correct dashing for the closing tick line', function() {
        page.closeLine.getCssValue('stroke-dasharray').then(function(dashSize) {
            expect(dashSize).toEqual(page.closingTickDash);
        });
    });
});
