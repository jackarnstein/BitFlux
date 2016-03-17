/**
 * Created by jarnstein on 27/10/2015.
 * Fixed functions take in a parameter of an attribute to target and a fixed value to set it to
 * Random functions take in a parameter of an attribute randomise the value to set it to
 */
'use strict';

var TaskHelper = function() {
    this.hodgeDodge = function() {
        browser.wait(function() {
            return $('.ngdialog-overlay').isPresent().then(function(present) {
                return !present;
            });
        }, 4000);
    };

    this.getData = function() {
        return browser.executeScript('return $(\'#primary-container\')[0].__data__.data').then(function(dataresults) {
            return dataresults;
        });
    };

    this.hasClass = function(element, cls) {
        return element.getAttribute('class').then(function(classes) {
            return classes.split(' ').indexOf(cls) !== -1;
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
        var transValue = 0.0;
        var distance = 0;
        var total = 0;
        var transformationValue = 0.0;
        var ticks = element.all(by.css('.tick.orient-right:not(.close-line)'));
        ticks.get(0).getAttribute('transform').then(function(trans) {
            var cut = trans.substring(13, 26);
            ticks.get(0).getText().then(function(startTick) {
               // console.log(startTick, cut);
                ticks.get(1).getAttribute('transform').then(function(transf) {
                    var lastcut = transf.substring(13, 26);
                    ticks.get(1).getText().then(function(lastTick) {
                        //console.log(lastTick, lastcut);
                        ticks.last().getAttribute('transform').then(function(finalTrans) {
                           // console.log(finalTrans);
                            ticks.last().getText().then(function(largestLabel) {
                                tickGapSize = cut - lastcut;
                                tickGapValue = lastTick - startTick;
                                tickInitialGap = finalTrans.substring(13, 26);
                                firstTickVal = largestLabel;
                                //console.log(tickGapSize, tickGapValue, tickInitialGap, firstTickVal);

                                var initialVal = (tickInitialGap / tickGapSize) * tickGapValue;
                                //console.log(initialVal);

                                var topbarValue = parseFloat(firstTickVal) + initialVal;
                                //console.log(topbarValue);


                                solution = (topbarValue - ((position / tickGapSize) * tickGapValue)).toPrecision(5);
                            });
                        });
                        //console.log(transValue);

                    });
                });
            });
        });
    };

};
module.exports = TaskHelper;
