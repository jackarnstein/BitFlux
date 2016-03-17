/**
 * Created by jarnstein on 26/10/2015.
 */
'use strict';


var AngularPage = function() {
    browser.get('http://scottlogic.github.io/BitFlux/develop/?seed=jack');
};

AngularPage.prototype = Object.create({}, {
    gridlineWidth: { get: function() { return '1px';}},
    gridlineColour: { get: function() { return 'rgb(60, 79, 83)';}},
    dropdownFontColour: { get: function() { return 'rgba(255, 255, 255, 1)';}},
    defaultFontColour: { get: function() { return 'rgb(255, 255, 255)';}},
    tickLabelSize: { get: function() { return '16px';}},
    productLabelSize: { get: function() {return '20px';}},
    closingTickColour: { get: function() { return 'rgb(55, 126, 184)';}},
    closingTickDash: { get: function() { return '4px';}},
    candlestickIcon: { get: function() { return '.bf-icon-candlestick-series';}},
    ohlcIcon: { get: function() { return '.bf-icon-ohlc-series';}},
    lineIcon: { get: function() { return '.bf-icon-line-series';}},
    pointIcon: { get: function() { return '.bf-icon-point-series';}},
    areaIcon: { get: function() { return '.bf-icon-area-series';}},
    movingAverageIcon: { get: function() {return '.bf-icon-moving-average-indicator';}},
    bollingerIcon: { get: function() {return '.bf-icon-bollinger-bands-indicator';}},
    rsiIcon: { get: function() {return '.bf-icon-rsi-indicator';}},
    macdIcon: { get: function() {return '.bf-icon-macd-indicator';}},
    volumeIcon: { get: function() {return '.bf-icon-bar-series';}},
    movingAverageText: { get: function() { return 'Moving Average';}},
    bollingerText: { get: function() { return 'Bollinger Bands';}},
    rsiText: { get: function() { return 'Relative Strength Index';}},
    macdText: { get: function() { return 'MACD';}},
    volumeText: { get: function() { return 'Volume';}},
    //close button
    deleteIcon: { get: function() {return '.bf-icon-delete';}},
    charts: { get: function() { return element(by.id('charts'));}},
    //legend
    legend: { get: function() { return element(by.css('#legend'));}},
    legendLabels: { get: function() { return element.all(by.css('#legend > .legendLabel'));}},
    legendValues: { get: function() { return element.all(by.css('#legend > #tooltip .tooltip'));}},
    legendTimestamp: { get: function() { return this.legendValues.get(0);}},
    legendOpen: { get: function() { return this.legendValues.get(1);}},
    legendHigh: { get: function() { return this.legendValues.get(2);}},
    legendLow: { get: function() { return this.legendValues.get(3);}},
    legendClose: { get: function() { return this.legendValues.get(4);}},
    legendVolume: { get: function() { return this.legendValues.get(5);}},
    selectors: { get: function() { return this.charts.element(by.css('.selectors'));}},
    //series
    seriesButton: { get: function() { return this.selectors.element(by.css('.series-dropdown'));}},
    seriesIcon: { get: function() { return this.seriesButton.element(by.css('button')).element(by.css('span')).getAttribute('class');}},
    //menu button
    candlestickButton: { get: function() { return this.charts.element(by.css(this.candlestickIcon));}},
    ohlcButton: { get: function() { return this.charts.element(by.css(this.ohlcIcon));}},
    lineButton: { get: function() { return this.charts.element(by.css(this.lineIcon));}},
    pointButton: { get: function() { return this.charts.element(by.css(this.pointIcon));}},
    areaButton: { get: function() { return this.charts.element(by.css(this.areaIcon));}},
    //indicators
    indicatorButton: { get: function() { return this.selectors.element(by.css('.indicator-dropdown'));}},
        //menu button
    movingAverageButton: { get: function() { return this.charts.element(by.css(this.movingAverageIcon));}},
    bollingerButton: { get: function() { return this.charts.element(by.css(this.bollingerIcon));}},
    rsiButton: { get: function() { return this.charts.element(by.css(this.rsiIcon));}},
    macdButton: { get: function() { return this.charts.element(by.css(this.macdIcon));}},
    volumeButton: { get: function() { return this.charts.element(by.css(this.volumeIcon));}},
        //displayed label
    movingAverageLabel: { get: function() { return this.charts.element(by.cssContainingText('.edit-indicator', this.movingAverageText));}},
    bollingerLabel: { get: function() { return this.charts.element(by.cssContainingText('.edit-indicator', this.bollingerText));}},
    rsiLabel: { get: function() { return this.charts.element(by.cssContainingText('.edit-indicator', this.rsiText));}},
    macdLabel: { get: function() { return this.charts.element(by.cssContainingText('.edit-indicator', this.macdText));}},
    volumeLabel: { get: function() { return this.charts.element(by.cssContainingText('.edit-indicator', this.volumeText));}},
        //close button
    movingAverageX: { get: function() { return this.movingAverageLabel.element(by.css(this.deleteIcon));}},
    bollingerX: { get: function() { return this.bollingerLabel.element(by.css(this.deleteIcon));}},
    rsiX: { get: function() { return this.rsiLabel.element(by.css(this.deleteIcon));}},
    macdX: { get: function() { return this.macdLabel.element(by.css(this.deleteIcon));}},
    volumeX: { get: function() { return this.volumeLabel.element(by.css(this.deleteIcon));}},
    //series
    seriesDropDown: { get: function() { return this.charts.element(by.css('.series-dropdown > .dropdown-toggle'));}},
    seriesList: { get: function() { return element.all(by.css('.series-dropdown > .dropdown-menu > li'));}},
    //navigator
    navbarRow: { get: function() {return element(by.css('#navbar-row'));}},
    //navbarExtent: { get: function(){return this.navbarRow.element(by.css('#navbar-container > .cartesian-chart > .plot-area-container > .plot-area > .multi > .extent'))}},
    navbarReset: { get: function() {return this.navbarRow.element(by.css('#navbar-reset > .reset-button'));}},
    navbarWidth: { get: function() {return this.navbarRow.element(by.css('#navbar-container > .cartesian-chart >.plot-area-container > .plot-area')).getAttribute('width');}},
    brushRightHandle: { get: function() {return this.navbarRow.element(by.css('#navbar-container > .cartesian-chart >.plot-area-container > .plot-area > .multi >.resize.e > .outer-handle'));}},
    brushLeftHandle: { get: function() {return this.navbarRow.element(by.css('#navbar-container > .cartesian-chart >.plot-area-container > .plot-area > .multi >.resize.w > .outer-handle'));}},
    brushStart: { get: function() {return element(by.css('.extent')).getAttribute('x');}},
    brushWidth: { get: function() {return element(by.css('.extent')).getAttribute('width');}},
    brushExtent: { get: function() {return element(by.css('.extent'));}},
    //Extent:       { get: function(){return element(by.css('.extent'))}},
    //chart layout
    yTicks: { get: function() { return element.all(by.css('.tick.orient-right:not(.close-line)'));}},
    closeTick: { get: function() { return element(by.css('.tick.orient-right.close-line'));}},
    closeLine: { get: function() { return element(by.css('.annotation.horizontal.close-line > line'));}},
    gridlines: { get: function() { return element.all(by.css('.y.gridline'));}},
    chartBox: { get: function() { return element(by.css('#primary-container > .cartesian-chart > .plot-area-container > .plot-area'));}},
    dataObj: { get: function() { return browser.executeScript('return $(\'#primary-container\')[0].__data__.data');}},
    productDropdownButton: { get: function() { return element.all(by.css('#product-dropdown > .dropdown-toggle'));}},
    dataGeneratorDropDown: { get: function() { return element.all(by.css('#product-dropdown > ul > li')).get(0);}},
    googDropDown: { get: function() { return element.all(by.css('#product-dropdown > ul > li')).get(1);}},
    usdDropDown: { get: function() { return element.all(by.css('#product-dropdown > ul > li')).get(2);}},
    gbpDropDown: { get: function() { return element.all(by.css('#product-dropdown > ul > li')).get(3);}},
    eurDropDown: { get: function() { return element.all(by.css('#product-dropdown > ul > li')).get(4);}},
    cadDropDown: { get: function() { return element.all(by.css('#product-dropdown > ul > li')).get(5);}},
    upValues: { get: function() { return element(by.css('g > .up'));}},
    downValues: { get: function() { return element(by.css('.down'));}}
});

module.exports = AngularPage;
