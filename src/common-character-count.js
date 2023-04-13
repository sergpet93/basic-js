const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let map1 = new Map();
  let map2 = new Map();
  let result = 0;
  for(let i of s1){
    if(map1.has(i))
      map1.set(i, map1.get(i) + 1)
    else
      map1.set(i, 1)
  }
  for(let i of s2){
    if(map2.has(i))
      map2.set(i, map2.get(i) + 1)
    else
      map2.set(i, 1)
  }
  for(let i of map1.keys()){
    result += (map2.has(i)) ? Math.min(map1.get(i), map2.get(i)) : 0;
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
