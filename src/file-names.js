const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let map = new Map();
  let result = [];
  for (let i of names){
    if(map.has(i)){
        result.push(i + `(${map.get(i)})`);
        map.set(i + `(${map.get(i)})`, 1);
        map.set(i, map.get(i) + 1);
    }
    else{
        map.set(i, 1);
        result.push(i);
    }
  }
  return result
}

module.exports = {
  renameFiles
};
