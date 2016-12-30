# days-in-a-row
Return an array of dates (strings) based on a start date and a number.
## Usage
```
const days = require('days-in-a-row');
const allTheDays = days(new Date('01/01/2017'), 45);
/* the result
[ '2017-01-01',
  '2017-01-02',
  ...
  '2017-02-13',
  '2017-02-14' ]
*/
```