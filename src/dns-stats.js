const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let map = new Map();
  for (let i of domains){
    let array = i.split('.').map(x => '.' + x).reverse()
    for (let j = 1; j < array.length + 1; j++){
        let temp = array.slice(0, j).join('');
        if (map.has(temp)){
            map.set(temp, map.get(temp) + 1)
        }
        else
            map.set(temp, 1)
    }
  }
  return Object.fromEntries(map)
}

module.exports = {
  getDNSStats
};
