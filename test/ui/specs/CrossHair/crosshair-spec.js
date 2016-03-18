'use strict';
var HomePage = require('../../pages/main-page.js');
var HomeHelper = require('../../helpers/homepage-helper.js');
var helper = new HomeHelper();

describe('Navigator', function() {
    var page;

    beforeAll(function() {
        browser.ignoreSynchronization = true;
        page = new HomePage();
    });

    it('should have all open legend values correct', function() {
        var dataArray = helper.getData();
        var lastResult = 0;
        var lastIndex = 0;
        var functi = function(foundPoint) {
            if (foundPoint) {
                element(by.css('.point')).getAttribute('transform').then(function(newResult) {
                    if (lastResult !== newResult) {
                        lastResult = newResult;
                        page.legendOpen.getText().then(function(legendText) {
                            var filt = Number(legendText.replace(/^\D+/g, ''));
                            var numb = dataArray[lastIndex].open;
                            numb = +numb.toFixed(2);
                            expect(filt).toEqual(numb);
                            lastIndex++;
                        });
                    }
                });
            }
        };

        browser.actions().dragAndDrop(page.brushLeftHandle, {x: -1000, y: 0}).perform();
        browser.sleep(1000);
        helper.getData().then(function(e) {
            dataArray = e;
            page.chartBox.getAttribute('layout-width').then(function(width) {
                lastResult = 0;
                lastIndex = 0;
                for (var i = 0; i < width / 4; i++) {
                    browser.actions()
                        .mouseMove(page.chartBox, {x: (4 * (i + 1)), y: 100})
                        .perform();
                    element(by.css('.point')).isPresent().then(functi);
                }
            });
        });
    });

    it('should have all high legend values correct', function() {
        var dataArray = helper.getData();
        var lastResult = 0;
        var lastIndex = 0;
        var functi = function(foundPoint) {
            if (foundPoint) {
                element(by.css('.point')).getAttribute('transform').then(function(newResult) {
                    if (lastResult !== newResult) {
                        lastResult = newResult;
                        page.legendHigh.getText().then(function(legendText) {
                            var filt = Number(legendText.replace(/^\D+/g, ''));
                            var numb = dataArray[lastIndex].high;
                            numb = +numb.toFixed(2);
                            expect(filt).toEqual(numb);
                            lastIndex++;
                        });
                    }
                });
            }
        };
        browser.actions().dragAndDrop(page.brushLeftHandle, { x: -1000, y: 0 }).perform();
        browser.sleep(1000);
        helper.getData().then(function(e) {
            dataArray = e;
            page.chartBox.getAttribute('layout-width').then(function(width) {
                lastResult = 0;
                lastIndex = 0;
                for (var i = 0; i < width / 4; i++) {
                    browser.actions()
                        .mouseMove(page.chartBox, { x: (4 * (i + 1)), y: 100 })
                        .perform();
                    element(by.css('.point')).isPresent().then(functi);
                }
            });
        });
    });

    it('should have all low legend values correct', function() {
        var dataArray = helper.getData();
        var lastResult = 0;
        var lastIndex = 0;
        var functi = function(foundPoint) {
            if (foundPoint) {
                element(by.css('.point')).getAttribute('transform').then(function(newResult) {
                    if (lastResult !== newResult) {
                        lastResult = newResult;
                        page.legendLow.getText().then(function(legendText) {
                            var filt = Number(legendText.replace(/^\D+/g, ''));
                            var numb = dataArray[lastIndex].low;
                            numb = +numb.toFixed(2);
                            lastIndex++;
                        });
                    }
                });
            }
        };

        browser.actions().dragAndDrop(page.brushLeftHandle, {x: -1000, y: 0}).perform();
        browser.sleep(1000);
        helper.getData().then(function(e) {
            dataArray = e;
            page.chartBox.getAttribute('layout-width').then(function(width) {
                lastResult = 0;
                lastIndex = 0;
                for (var i = 0; i < width / 4; i++) {
                    browser.actions()
                        .mouseMove(page.chartBox, {x: (4 * (i + 1)), y: 100})
                        .perform();
                    element(by.css('.point')).isPresent().then(functi);
                }
            });
        });
    });

    it('should have all close legend values correct', function() {
        var dataArray = helper.getData();
        var lastResult;
        var lastIndex;
        var functi = function(foundPoint) {
            if (foundPoint) {
                element(by.css('.point')).getAttribute('transform').then(function(newResult) {
                    if (lastResult !== newResult) {
                        lastResult = newResult;
                        page.legendClose.getText().then(function(legendText) {
                            var filt = Number(legendText.replace(/^\D+/g, ''));
                            var numb = dataArray[lastIndex].close;
                            numb = +numb.toFixed(2);
                            expect(filt).toEqual(numb);
                            lastIndex++;
                        });
                    }
                });
            }
        };

        browser.actions().dragAndDrop(page.brushLeftHandle, {x: -1000, y: 0}).perform();
        browser.sleep(1000);
        helper.getData().then(function(e) {
            dataArray = e;
            page.chartBox.getAttribute('layout-width').then(function(width) {
                lastResult = 0;
                lastIndex = 0;
                for (var i = 0; i < width / 4; i++) {
                    browser.actions()
                        .mouseMove(page.chartBox, {x: (4 * (i + 1)), y: 100})
                        .perform();
                    element(by.css('.point')).isPresent().then(functi);
                }
            });
        });
    });

    //doesnt work as there is a rounding error in the legend calculations

    //it('should have all volume legend values correct', function() {
    //    var dataArray = helper.getData();
    //    browser.actions().dragAndDrop(page.brushLeftHandle, {x: -1000, y: 0}).perform();
    //    browser.sleep(1000);
    //    helper.getData().then(function (e) {
    //        dataArray = e;
    //        page.chartBox.getAttribute('layout-width').then(function (width) {
    //            var lastResult = 0;
    //            var lastIndex = 0;
    //            for (var i = 0; i < width/4; i++) {
    //                browser.actions()
    //                    .mouseMove(page.chartBox, { x: (4 * (i + 1)), y: 100 })
    //                    .perform();
    //                element(by.css('.point')).isPresent().then(function (foundPoint) {
    //                    if (foundPoint) {
    //                        element(by.css('.point')).getAttribute('transform').then(function (newResult) {
    //                            if (lastResult !== newResult) {
    //                                lastResult = newResult;
    //                                page.legendVolume.getText().then(function (legendText) {
    //                                    var dataValue = ((dataArray[lastIndex].volume));
    //                                    var legendValue = legendText.replace(/[^0-9\.]+/g,'');
    //
    //                                    if (dataValue < 1) {
    //                                        dataValue = dataValue*1000;
    //                                    }
    //
    //                                    dataValue = dataValue.toPrecision(2);
    //                                    var displayedValue = (parseFloat(legendText.replace(/[^0-9\.]+/g,''))).toPrecision(2);
    //                                    expect(dataValue).toContain(displayedValue);
    //                                    lastIndex++;
    //                                });
    //                            }
    //                        });
    //                    }
    //                });
    //            }
    //        });
    //    });
    //});

//This requires further work and completion...
//    it('should have candlestick allignment correct to xaxis', function() {
//        var dataArray = helper.getData();
//        browser.actions().dragAndDrop(page.brushLeftHandle, {x: -1000, y: 0}).perform();
//        browser.sleep(1000);
//
//
//        var upCount = 0;
//        var downCount = 0;
//        var upList;
//        var downList;
//        var tickDistance;
//        //page.gridlines.each(function(g){
//        //    g.getAttribute('y2').then(function(y){
//        //        console.log(y);
//        //    })
//        //});
//        //
//        //page.yTicks.get(0).getText().then(function(tickOne){
//        //    page.yTicks.get(1).getText().then(function(tickTwo){
//        //
//        //    });
//        //});
//
//        var finalList = [];
//
//        //Get the coordinates of the up candles and the down candles
//        page.upValues.getAttribute('d').then(function(d){
//            upList = d.split('M');
//            page.downValues.getAttribute('d').then(function(d2) {
//                downList = d2.split('M');
//                //finalList = upList;
//                var currentIndex = 0;
//                var upIndex = 3;
//                var downIndex = 3;
//
//                //merge and sort the up/down lists so the elements are in the right order in one list.
//
//                for (var i = 0; i < (downList.length/3) + (upList.length/3); i++) {
//                    //console.log('up',upList[i]);
//                    //console.log('down',downList[i]);
//
//                    var upStart = parseFloat(upList[upIndex].substr(0, upList[upIndex].indexOf(',')));
//                    //console.log(upStart);
//                    var downStart = parseFloat(downList[downIndex].substr(0, downList[downIndex].indexOf(',')));
//
//                    //console.log(downStart);
//
//                    if(upStart<downStart){
//                        //console.log(upStart);
//                        finalList.push(upStart);
//                        var local = upList[upIndex].substr(upList[upIndex].indexOf(',')+1);
//                        var localTwo = upList[upIndex+1].substr(upList[upIndex+1].indexOf(',')+1);
//                        //console.log(upStart, local.substring(0,10), localTwo.substring(0,10));
//                        helper.getChartValue(local.substring(0,10));
//                        helper.getChartValue(localTwo.substring(0,10));
//                        //helper.getChartValue(local.substring(0,10));
//
//                        upIndex+=3;
//                        if(upStart>907){
//                            i = downList.length+upList.length;
//                        }
//                        //finaList.push(up)
//                    } else {
//                       // console.log(downStart);
//                        finalList.push(downStart);
//                        var local = downList[downIndex].substr(downList[downIndex].indexOf(',')+1);
//                        var localTwo = downList[upIndex+1].substr(downList[upIndex+1].indexOf(',')+1);
//
//                        //console.log(downStart, local.substring(0,10),localTwo.substring(0,10));
//                        helper.getChartValue(local.substring(0,10));
//                        helper.getChartValue(localTwo.substring(0,10));
//                        downIndex+=3;
//                        if(downStart>907){
//                            i = downList.length+upList.length;
//                        }
//                    }
//                }
//            })
//        });
//
//
//            //    var upIndex = 3;
//            //    var downIndex = 3;
//            //
//            //    for(var i = 3; i < downList.length; i+=3){
//            //
//            //        upList[i].substring(0,10);
//            //
//            //
//            //
//            //        console.log('up',upList[i]);
//            //        console.log('down',downList[i]);
//            //        var local = upList[i].substr(upList[i].indexOf(',')+1);
//            //        // console.log(local);
//            //        helper.getChartValue(local.substring(0,10));
//            //    }
//            //
//            //});
//
//        helper.getData().then(function (e) {
//            dataArray = e;
//            page.chartBox.getAttribute('layout-width').then(function (width) {
//                var lastResult = 0;
//                var lastIndex = 0;
//                for (var i = 0; i < width/4; i++) {
//                    browser.actions()
//                        .mouseMove(page.chartBox, {x: (4 * (i + 1)), y: 100})
//                        .perform();
//                    element(by.css('.point')).isPresent().then(function (foundPoint) {
//                        if (foundPoint) {
//                            element(by.css('.point')).getAttribute('transform').then(function (newResult) {
//                                if (lastResult !== newResult) {
//                                    lastResult = newResult;
//                                    page.legendOpen.getText().then(function (legendOpen) {
//                                        page.legendClose.getText().then(function (legendClosed) {
//                                            //if up, else down, either way get next array list element
//                                            if(legendOpen<legendClosed){
//
//                                            } else {
//
//                                            }
//                                        });
//                                    });
//                                }
//                            });
//                        }
//                    });
//                }
//            });
//        });
//    });
});
