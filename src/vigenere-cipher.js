const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(arg = true){
    this.arg = arg;
    this.alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
  encrypt(str, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!str || !key)
      throw new Error('Incorrect arguments!');
    let result = '';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let number_str = 0;
    let number_key = 0;
    let number = 0;
    for(let i = 0; i < str.length; i++){
      if(this.alp.indexOf(str[i]) === -1){
        result += str[i];
        number += 1; 
      }
      else{
        number_str = this.alp.indexOf(str[i]);
        number_key = this.alp.indexOf(key[(i - number) % key.length]) ;
        result += this.alp[(number_key + number_str) % 26];
      }
    }
    return (this.arg) ? result : result.split('').reverse().join('')
  }
  decrypt(str, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!str || !key)
      throw new Error('Incorrect arguments!');
    let result = '';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let number_str = 0;
    let number_key = 0;
    let number = 0;
    for(let i = 0; i < str.length; i++){
      if(this.alp.indexOf(str[i]) === -1){
        result += str[i];
        number += 1; 
      }
      else{
        number_str = this.alp.indexOf(str[i]);
        number_key = this.alp.indexOf(key[(i - number) % key.length]) ;
        result += this.alp[(26 + number_str - number_key) % 26];
      }
    }
    return (this.arg) ? result : result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
