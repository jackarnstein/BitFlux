var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
    framework: 'jasmine2',
    suites: {
        indicators: ['specs/Indicators/*-spec.js'],
        series: ['specs/Series/*-spec.js'],
        crosshair: ['specs/CrossHair/*-spec.js'],
        product: ['specs/Products/*-spec.js'],
        gridlines: ['specs/Gridlines/*-spec.js'],
        navigator: ['specs/Navigator/*-spec.js'],
        all: ['specs/*.js', 'specs/*/*.js', 'specs/*/*/*.js', 'specs/*/*/*/*.js']
    },
    jasmineNodeOpts: {
        print: function() {},
        defaultTimeoutInterval: 400000
    },
    onPrepare: function() {
        browser.driver.manage().window().maximize();
        //Uncomment this to disable animation
        //var disableNgAnimate = function() {
        //    angular.module('disableNgAnimate', []).run(function($animate) {
        //        $animate.enabled(false);
        //    });
        //};
        //var disableCssAnimate = function() {
        //    angular
        //        .module('disableCssAnimate', [])
        //        .run(function() {
        //            var style = document.createElement('style');
        //            style.type = 'text/css';
        //            style.innerHTML = '* {' +
        //            '-webkit-transition: none !important;' +
        //            '-moz-transition: none !important' +
        //            '-o-transition: none !important' +
        //            '-ms-transition: none !important' +
        //            'transition: none !important' +
        //            '-webkit-animation: none !important;' +
        //            '-moz-animation: none !important' +
        //            '-o-animation: none !important' +
        //            '-ms-animation: none !important' +
        //            'animation: none !important' +
        //            '-webkit-transform: none !important;' +
        //            '-moz-transform: none !important' +
        //            '-o-transform: none !important' +
        //            '-ms-transform: none !important' +
        //            'transform: none !important' +
        //            '}';
        //            document.getElementsByTagName('head')[0].appendChild(style);
        //        });
        //};
        //browser.addMockModule('disableNgAnimate', disableNgAnimate);
        //browser.addMockModule('disableCssAnimate', disableCssAnimate);


        var path = require('path');

        var currentDate = new Date(),
            currentHoursIn24Hour = currentDate.getHours(),
            totalDateString = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + (currentDate.getYear() + 1900) + '-' + currentHoursIn24Hour + 'h-' + currentDate.getMinutes() + 'm';

        //uncomment this if running locally and you would like screenshots
        //jasmine.getEnv().addReporter(
        //    new HtmlScreenshotReporter({
        //        dest: './results/' + totalDateString,
        //        filename: 'my-report.html',
        //
        //        pathBuilder: function pathBuilder(spec, suite) {
        //            var folderPath = [];
        //            //console.log(spec);
        //            if (spec._suite._parent) {
        //                var specParent = spec._suite;
        //                while (specParent._parent) {
        //                    folderPath.push(specParent._parent.description);
        //                    specParent = specParent._parent;
        //                }
        //                folderPath.push(spec._suite.description);
        //            }
        //            if (folderPath.length > 0) {
        //                var savePath = '';
        //                for (var i = 0; i < folderPath.length; i++) {
        //                    savePath += folderPath[i] + '/';
        //                }
        //                return path.join(suite.suite1._specs[0]._bName, savePath, spec.description);
        //            } else {
        //                return path.join(suite.suite1._specs[0]._bName, spec._suite.fullName, spec.description);
        //            }
        //        }
        //    }));

        // add jasmine spec reporter change from NONE to all on stacktrace if need help!
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',
            displaySpecDuration: 'true',
            prefixes: {
                success: ':-) ',
                failure: '✗ ',
                pending: '* '
            },
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            }
        }));
    },
    multiCapabilities: [
        {
            browserName: 'chrome',
            shardTestFiles: false,
            maxInstances: 1     //make 2 for parallel
        }
    ]
};
