'use strict';

var HomePage = require('../../pages/main-page.js');
var HomeHelper = require('../../helpers/homepage-helper.js');
var helper = new HomeHelper();

describe('Indicators', function() {
    var page;

    beforeAll(function() {
        browser.ignoreSynchronization = true;
        page = new HomePage();
    });

    it('should display the indicators options button', function() {
        expect(page.indicatorButton.isDisplayed()).toBeTruthy();
    });

    it('should allow moving average to be added', function() {
        page.indicatorButton.click();
        page.movingAverageButton.click();
        expect(page.movingAverageLabel.isDisplayed()).toBeTruthy();
    });

    it('should allow removal of the moving average through dropdown menu', function() {
        page.indicatorButton.click();
        page.movingAverageButton.click();
        expect(page.movingAverageLabel.isPresent()).toBeFalsy();

    });

    it('should allow removal of the moving average using the X button', function() {
        page.indicatorButton.click();
        page.movingAverageButton.click();
        page.movingAverageX.click();
        expect(page.movingAverageLabel.isPresent()).toBeFalsy();
    });

    it('should allow selection of bollinger bands', function() {
        page.indicatorButton.click();
        page.bollingerButton.click();
        expect(page.bollingerLabel.isDisplayed()).toBeTruthy();

    });

    it('should allow removal of bollinger bands through dropdown menu', function() {
        page.indicatorButton.click();
        page.bollingerButton.click();
        expect(page.bollingerLabel.isPresent()).toBeFalsy();

    });

    it('should allow removal of bollinger bands using the X button', function() {
        page.indicatorButton.click();
        page.bollingerButton.click();
        page.bollingerX.click();
        expect(page.movingAverageLabel.isPresent()).toBeFalsy();
    });

    it('should allow selection of rsi', function() {
        page.indicatorButton.click();
        page.rsiButton.click();
        expect(page.rsiLabel.isDisplayed()).toBeTruthy();

    });

    it('should allow removal of rsi through dropdown', function() {
        page.indicatorButton.click();
        page.rsiButton.click();
        expect(page.bollingerLabel.isPresent()).toBeFalsy();

    });

    it('should allow removal of rsi using the X button', function() {
        page.indicatorButton.click();
        page.rsiButton.click();
        page.rsiX.click();
        expect(page.bollingerLabel.isPresent()).toBeFalsy();
    });

    it('should allow selection of macd', function() {
        page.indicatorButton.click();
        page.macdButton.click();
        expect(page.macdLabel.isDisplayed()).toBeTruthy();

    });

    it('should allow removal of macd through dropdown', function() {
        page.indicatorButton.click();
        page.macdButton.click();
        expect(page.macdLabel.isPresent()).toBeFalsy();

    });

    it('should allow removal of macd using the X button', function() {
        page.indicatorButton.click();
        page.macdButton.click();
        page.macdX.click();
        expect(page.macdLabel.isPresent()).toBeFalsy();

    });

    it('should allow selection of volume', function() {
        page.indicatorButton.click();
        page.volumeButton.click();
        expect(page.volumeLabel.isDisplayed()).toBeTruthy();

    });

    it('should allow removal of volume through dropdown', function() {
        page.indicatorButton.click();
        page.volumeButton.click();
        expect(page.volumeLabel.isPresent()).toBeFalsy();
    });

    it('should allow removal of volume using the X button', function() {
        page.indicatorButton.click();
        page.volumeButton.click();
        page.volumeX.click();
        expect(page.volumeLabel.isPresent()).toBeFalsy();
    });

});
