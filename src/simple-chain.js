const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if(!Number.isInteger(position) || typeof position !== 'number' || this.arr[position - 1] === undefined){
      this.arr = [];
      throw new NotImplementedError(`You can\'t remove incorrect link!`);
    }
    else {
      this.arr.splice(position - 1, 1);
    }
    return this
  },
  reverseChain() {
      this.arr.reverse();
      return this
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result
  }
};

module.exports = {
  chainMaker
};
