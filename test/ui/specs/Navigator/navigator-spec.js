/**
 * Created by jarnstein on 19/11/2015.
 *
 * THERE IS A PROBLEM WITH TESTING THE NAVIGATOR BRUSH!
 * You cannot target the right brush if it is located on the far right of the navigator bar!!!
 * If you target the right brush, it will target its middle.. as the middle is actually not targetable due to it being "hidden" behind the navi bar this will cause failures
 * Please be warey of this if you try to automate tests around the right brush. I suggest the navi bar *doesnt* obstruct the brush, as it makes it hard to target it with the mouse anyway...
 *
 */
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

    it('Should display the navigator bar window', function() {
        expect(page.navbarRow.isDisplayed()).toBeTruthy();
    });


    it('should display the reset button of the navigator', function() {
        expect(page.navbarReset.isDisplayed()).toBeTruthy();
    });

    it('should extend brush to far left of navigator making full length', function() {
        page.brushStart.then(function(positionFromStart) {
            browser.actions().dragAndDrop(page.brushLeftHandle, {x: -positionFromStart, y: 0}).perform();
            page.brushStart.then(function(newX) {
                expect(Number(newX)).toEqual(0);
            });
        });
    });

    it('should cap extension of the brush on the left ', function() {
        page.brushStart.then(function(positionFromStart) {
            browser.actions().dragAndDrop(page.brushLeftHandle, {x: -(positionFromStart + helper.randomInteger(1, positionFromStart)), y: 0}).perform();
            page.brushStart.then(function(newX) {
                expect(Number(newX)).toEqual(0);
            });
        });
    });

    //Extending it to the right by any amount should result in no increase in width or starting brush position
    it('should cap extension of the brush on the right and respect the navbar boundary', function() {
        page.brushWidth.then(function(brushWidth) {
            page.brushStart.then(function(brushStart) {
                browser.actions().dragAndDrop(page.brushRightHandle, {x: helper.randomInteger(1, 1000), y: 0}).perform();
                page.brushWidth.then(function(newWidth) {
                    page.brushStart.then(function(newStart) {
                        expect(brushWidth).toEqual(newWidth);
                        expect(brushStart).toEqual(newStart);
                        page.navbarWidth.then(function(navbarWidth) {
                            expect(navbarWidth).toEqual(brushWidth);
                        });
                    });
                });
            });
        });
    });

    it('should reduce the bar size down to 20% if the reset button is pressed', function() {
        page.brushWidth.then(function(brushWidth) {
            page.navbarReset.click();
            page.brushWidth.then(function(newBrushWidth) {
                expect(Number(newBrushWidth)).toEqual(brushWidth / 5);
            });
        });
    });

    it('should move the brush extent if drag/dropped without changing size', function() {
        page.brushWidth.then(function(bw) {
            browser.actions().dragAndDrop(page.brushExtent, {x: -100, y: 0}).perform();
            page.brushWidth.then(function(newBw) {
                expect(parseInt(bw, 10)).toEqual(Math.round(newBw));
            });
        });
    });

    it('should allow the right brush to be pulled over the left', function() {
        page.brushWidth.then(function(brushWidth) {
           // console.log(brushWidth);
            page.brushStart.then(function(brushStart) {
               // console.log(brushStart);
                browser.actions().dragAndDrop(page.brushRightHandle, {x: -(brushWidth * 2), y: 0}).perform();

                page.brushWidth.then(function(newWidth) {
                    //console.log(newWidth);

                    page.brushStart.then(function(newBrushStart) {
                       // console.log(newBrushStart);

                        expect(parseFloat(brushWidth).toFixed(0)).toEqual(parseFloat(newWidth).toFixed(0));
                    });
                });

            });
        });
    });


    //it('should reset the extent if the brush drag movement is invalid', function(){
    //
    //    page.brushWidth.then(function(width){
    //        expect(width).toEqual()
    //    })
    //    browser.actions().dragAndDrop(page.brushLeftHandle, {x: -1000, y: 0}).perform();
    //    page.brushWidth.then(function (x) {
    //        console.log(x);
    //    });
    //
    //    page.brushStart.then(function(w){
    //        console.log(w);
    //    });
    //
    //
    //    //browser.actions().dragAndDrop(page.navbarRightHandle, {x: -100, y: 0}).perform();
    //
    //    browser.sleep(1000);
    //})

});
