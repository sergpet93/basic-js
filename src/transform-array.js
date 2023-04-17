const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)){
    let result = [];
    let i = 0;
    while(i < arr.length){
      switch(arr[i]) {
        case '--discard-next':{
          i += 3;
          break;
        }
        case '--discard-prev':{
          result.pop();
          i += 1;
          break;
        }
        case '--double-next':{
          if (typeof arr[i + 1] === 'number')
            result.push(arr[i + 1]);
          i += 1;
          break;
        }
        case '--double-prev':{
          if (typeof arr[i - 1] === 'number')
            result.push(arr[i - 1]);
          i += 1;
          break;
        }
        default:{
          result.push(arr[i]);
          i += 1;
        }
      }
    }
    return result
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
  // remove line with error and write your code here
}

module.exports = {
  transform
};
