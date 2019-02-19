# days-in-a-row

[![npm version](https://badge.fury.io/js/days-in-a-row.svg)](https://badge.fury.io/js/days-in-a-row) [![Build Status](https://travis-ci.org/Kevnz/days-in-a-row.svg?branch=master)](https://travis-ci.org/Kevnz/days-in-a-row)

Return an array of dates (strings) based on a start date and a number.

## Usage

```js
const days = require('days-in-a-row');
const allTheDays = days(new Date('01/01/2017'), 45);
/* the result
[ '2017-01-01',
  '2017-01-02',
  ...
  '2017-02-13',
  '2017-02-14' ]
*/

// You can then map the results to javascript date object
const allTheDates = allTheDays((day) => new Date(day));
// Then something like daylight to format the day for display
var daylight = require('daylight');
const prettyDates = allTheDates.map((day) => daylight('l, F jS', day));
/*
[ 'Monday, Jan 1st',
  'Tuesday, Jan 2nd',
  ...
  'Monday, Feb 13th',
  'Tuesday, Feb 14th' ]
 */
```