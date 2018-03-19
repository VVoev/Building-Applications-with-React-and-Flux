"use strict";

//This file is mocking a web API by hitting hard coded data.
var fans = require('./fanData').fans;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (fan) {
    return fans.title.replace(' ', '-');
};

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var FansApi = {
    getAllFans: function () {
        return _clone(fans);
    },

    getFanById: function (id) {
        var fan = _.find(fans, { id: id });
        return _clone(fan);
    },

    saveFan: function (fan) {
        console.log('Imagine saving fan via AJAX call...');

        if (fan.id) {
            var existingFanIndex = _.indexOf(fans, _.find(fans, { id: fan.id }));
            fans.splice(existingFanIndex, 1, fan);
        } else {
            //just simulating creation here. This data 
            //would be generated on the server in a real app. 
            fan.id = _generateId(fan);
            fans.push(_clone(fan));
        }
        return fan;
    },

    deleteFan: function (id) {
        console.log('Imagine deleting fan with id of ' + id + ' via AJAX call...');
        _.remove(fans, { id: id });
    }
};

module.exports = FansApi;