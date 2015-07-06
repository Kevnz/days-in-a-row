var tap = require('tap');


var days = require('../index');
var dateToTest = new Date('01/01/2015');

var result = days(dateToTest, 45)
tap.equal(result.length, 45, 'check if the range is 45');