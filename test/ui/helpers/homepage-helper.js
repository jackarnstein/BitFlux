'use strict';

var TaskHelper = function() {
    this.getData = function() {
        return browser.executeScript('return $(\'#primary-container\')[0].__data__.data').then(function(dataresults) {
            return dataresults;
        });
    };

    this.randomInteger = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //takes in a d position and will determine the value of that position in the chart
    this.getChartValue = function(position) {
        var tickInitialGap;
        var firstTickVal;
        var tickGapSize;
        var tickGapValue;
        var solution;
        var ticks = element.all(by.css('.tick.orient-right:not(.close-line)'));
        ticks.get(0).getAttribute('transform').then(function(trans) {
            var cut = trans.substring(13, 26);
            ticks.get(0).getText().then(function(startTick) {
                ticks.get(1).getAttribute('transform').then(function(transf) {
                    var lastcut = transf.substring(13, 26);
                    ticks.get(1).getText().then(function(lastTick) {
                        ticks.last().getAttribute('transform').then(function(finalTrans) {
                            ticks.last().getText().then(function(largestLabel) {
                                tickGapSize = cut - lastcut;
                                tickGapValue = lastTick - startTick;
                                tickInitialGap = finalTrans.substring(13, 26);
                                firstTickVal = largestLabel;
                                var initialVal = (tickInitialGap / tickGapSize) * tickGapValue;
                                var topbarValue = parseFloat(firstTickVal) + initialVal;
                                solution = (topbarValue - ((position / tickGapSize) * tickGapValue)).toPrecision(5);
                            });
                        });
                    });
                });
            });
        });
    };

};
module.exports = TaskHelper;
