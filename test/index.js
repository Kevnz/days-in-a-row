var tap = require('tap')

var days = require('../index')
var dateToTest = new Date('01/01/2017')

var result = days(dateToTest, 45)

var endDate = new Date('2017-02-14T00:00:00.000Z')
var endFromList = new Date(result[44])

tap.equal(result.length, 45, 'check if the range is 45')
tap.equal(
  endDate.valueOf(),
  endFromList.valueOf(),
  'check if the last date is the expected date'
)
