const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  if (arguments.length === 0)
    return 'Unable to determine the time of year!'
  if (Date.parse(date) && !isNaN(Date.parse(date)) && date instanceof Date){
    let Month = date.getMonth();
    if (1 < Month && Month < 5)
      return 'spring'
    else if (4 < Month && Month < 8)
      return 'summer'
    else if (7 < Month && Month < 11)
      return 'autumn'
    else
      return 'winter'
  }
  else
    throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
