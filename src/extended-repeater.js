const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let addition = (options.addition !== undefined) ? ['' + options.addition] : [''];
  let additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  let separator = (options.separator !== undefined) ? options.separator : '+';
  let repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  let addition_str = [].concat(...Array(additionRepeatTimes).fill(addition)).join(additionSeparator);
  result = [].concat(...Array(repeatTimes).fill([str+addition_str])).join(separator);
  return result
}

module.exports = {
  repeater
};
