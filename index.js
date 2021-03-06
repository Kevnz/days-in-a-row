var dateMath = require('date-arithmetic')
var ymd = require('year-month-day')

/**
 * Get an array of dates
 *
 * @param {date} startDate
 * @param {number} numberOfDays
 * @returns {Array<string>} Dates
 */
const daysInARow = (startDate, numberOfDays) => {
  var results = []
  for (var index = 0; index < numberOfDays; index++) {
    var d = dateMath.add(startDate, index, 'day')
    var split = ymd(d)
    results.push(
      split.year +
        '-' +
        (split.month < 10 ? '0' + split.month : split.month) +
        '-' +
        (split.day < 10 ? '0' + split.day : split.day)
    )
  }
  return results
}


module.exports = daysInARow