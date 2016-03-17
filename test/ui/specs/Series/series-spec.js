/**
 * Created by jarnstein on 19/11/2015.
 */
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

    it('should display the candlestick series on click', function() {
        page.seriesDropDown.click();
        page.candlestickButton.click();
    });

    it('should display the candlestick series icon', function() {
        //expect(page.candlestickIcon.isDisplayed()).toBeTruthy();
    });

    it('should display the OHLC series on click', function() {
        page.seriesButton.click();
        page.ohlcButton.click();
        expect(page.seriesIcon).toMatch(page.ohlcIcon);

    });

    it('should display the OHLC series icon', function() {
        //expect(page.ohlcIcon.isDisplayed()).toBeTruthy();
    });

    it('should display the line series on click', function() {
        page.seriesButton.click();
        page.lineButton.click();
        expect(page.seriesIcon).toMatch(page.lineIcon);
    });

    it('should display the line series icon', function() {
       // expect(page.lineIcon.isDisplayed()).toBeTruthy();
    });

    it('should display the point series on click', function() {
        page.seriesButton.click();
        page.pointButton.click();
        expect(page.seriesIcon).toMatch(page.pointIcon);
    });

    it('should display the point series icon', function() {
        //expect(page.pointIcon.isDisplayed()).toBeTruthy();
    });

    it('should display the area series on click', function() {
        page.seriesButton.click();
        page.areaButton.click();
        expect(page.seriesIcon).toMatch(page.areaIcon);

    });

    it('should display the area series icon', function() {
        //expect(page.areaIcon.isDisplayed()).toBeTruthy();
    });
});
