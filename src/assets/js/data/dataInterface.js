(function(d3, fc, sc) {
    'use strict';

    sc.data.dataInterface = function() {
        var historicFeed = fc.data.feed.coinbase();
        var callbackGenerator = sc.util.callbackInvalidator();
        var ohlcConverter = sc.data.feed.coinbase.ohlcWebSocketAdaptor();
        var dataGenerator = fc.data.random.financial();
        var dispatch = d3.dispatch('messageReceived', 'dataLoaded');
        var candlesOfData = 200;

        function dataInterface(period) {
            dataInterface.invalidate();
            historicFeed.granularity(period);
            ohlcConverter.period(period);
            updateHistoricFeedDateRangeToPresent(period);
            var currentData = [];
            historicFeed(callbackGenerator(function(err, data) {
                if (!err) {
                    currentData = data.reverse();
                    ohlcConverter(liveCallback(currentData), currentData[currentData.length - 1]);
                }
                dispatch.dataLoaded(err, currentData);
            }));
        }

        dataInterface.generateData = function() {
            dataInterface.invalidate();
            dispatch.dataLoaded(null, dataGenerator(candlesOfData));
            return dataInterface;
        };

        dataInterface.invalidate = function() {
            ohlcConverter.close();
            callbackGenerator.invalidateCallback();
            return dataInterface;
        };

        d3.rebind(dataInterface, dispatch, 'on');

        function updateHistoricFeedDateRangeToPresent(period) {
            var currDate = new Date();
            var startDate = d3.time.second.offset(currDate, -candlesOfData * period);
            historicFeed.start(startDate)
                .end(currDate);
        }

        function liveCallback(data) {
            return function(socketEvent, latestBasket) {
                if (socketEvent.type === 'message' && latestBasket) {
                    newBasketReceived(latestBasket, data);
                }
                dispatch.messageReceived(socketEvent, data);
            };
        }

        function newBasketReceived(basket, data) {
            if (data[data.length - 1].date.getTime() !== basket.date.getTime()) {
                data.push(basket);
            } else {
                data[data.length - 1] = basket;
            }
        }

        return dataInterface;
    };

})(d3, fc, sc);