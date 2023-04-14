const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let i = 0;
  while (i < str.length){
    let pos = 0;
    for (let j = i; j < str.length; j++){
        if(str[i] !== str[j])
            break;
        pos += 1;
    }
    result += (pos === 1) ? str[i] : pos + str[i];
    i += pos;
  }
  return result
}

module.exports = {
  encodeLine
};
