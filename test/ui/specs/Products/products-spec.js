'use strict';

var HomePage = require('../../pages/main-page.js');

describe('Series', function() {
    var page;

    beforeAll(function() {
        browser.ignoreSynchronization = true;
        page = new HomePage();
    });

    it('should display the product dropdown button', function() {
        expect(page.productDropdownButton.isDisplayed()).toBeTruthy();

    });

    it('should display the default dropdown type', function() {
        page.productDropdownButton.getText().then(function(content) {
            expect(content).toContain('Data Generator');
        });
    });

    it('should have the correct colour for the dropdown label', function() {
        page.productDropdownButton.getCssValue('color').then(function(colour) {
            expect(colour).toContain(page.dropdownFontColour);
        });
    });

    it('should have the correct size for the dropdown label', function() {
        page.productDropdownButton.getCssValue('font-size').then(function(size) {
            expect(size).toContain(page.productLabelSize);
        });
    });

    it('should navigate to google dataset', function() {
        page.productDropdownButton.click();
        page.googDropDown.click();
        browser.sleep(5000);
        page.productDropdownButton.getText().then(function(content) {
            expect(content).toContain('GOOG');
        });
    });

    it('should maintain the correct colour for the dropdown label', function() {
        page.productDropdownButton.getCssValue('color').then(function(colour) {
            expect(colour).toContain(page.dropdownFontColour);
        });
    });

    it('should maintain the correct size for the dropdown label', function() {
        page.productDropdownButton.getCssValue('font-size').then(function(size) {
            expect(size).toContain(page.productLabelSize);
        });
    });

    it('should navigate to usd dataset', function() {
        page.productDropdownButton.click();
        page.usdDropDown.click();
        browser.sleep(5000);
        page.productDropdownButton.getText().then(function(content) {
            expect(content).toContain('BTC-USD');
        });
    });

    it('should maintain the correct colour for the dropdown label', function() {
        page.productDropdownButton.getCssValue('color').then(function(colour) {
            expect(colour).toContain(page.dropdownFontColour);
        });
    });

    it('should maintain the correct size for the dropdown label', function() {
        page.productDropdownButton.getCssValue('font-size').then(function(size) {
            expect(size).toContain(page.productLabelSize);
        });
    });

    it('should navigate to gbp dataset', function() {
        page.productDropdownButton.click();
        page.gbpDropDown.click();
        browser.sleep(5000);
        page.productDropdownButton.getText().then(function(content) {
            expect(content).toContain('BTC-GBP');
        });
    });

    it('should maintain the correct colour for the dropdown label', function() {
        page.productDropdownButton.getCssValue('color').then(function(colour) {
            expect(colour).toContain(page.dropdownFontColour);
        });
    });

    it('should maintain the correct size for the dropdown label', function() {
        page.productDropdownButton.getCssValue('font-size').then(function(size) {
            expect(size).toContain(page.productLabelSize);
        });
    });

    it('should navigate to euro dataset', function() {
        page.productDropdownButton.click();
        page.eurDropDown.click();
        browser.sleep(5000);
        page.productDropdownButton.getText().then(function(content) {
            expect(content).toContain('BTC-EUR');
        });
    });

    it('should maintain the correct colour for the dropdown label', function() {
        page.productDropdownButton.getCssValue('color').then(function(colour) {
            expect(colour).toContain(page.dropdownFontColour);
        });
    });

    it('should maintain the correct size for the dropdown label', function() {
        page.productDropdownButton.getCssValue('font-size').then(function(size) {
            expect(size).toContain(page.productLabelSize);
        });
    });

    it('should navigate to canadian dataset', function() {
        page.productDropdownButton.click();
        page.cadDropDown.click();
        browser.sleep(5000);
        page.productDropdownButton.getText().then(function(content) {
            expect(content).toContain('BTC-CAD');
        });
    });

    it('should maintain the correct colour for the dropdown label', function() {
        page.productDropdownButton.getCssValue('color').then(function(colour) {
            expect(colour).toContain(page.dropdownFontColour);
        });
    });

    it('should maintain the correct size for the dropdown label', function() {
        page.productDropdownButton.getCssValue('font-size').then(function(size) {
            expect(size).toContain(page.productLabelSize);
        });
    });
});
