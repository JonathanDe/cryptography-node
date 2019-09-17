const crypto = require('crypto');
const hash = crypto.createHash('md5');

hash.update('password1');
// 7c6a180b36896a0a8c02787eeafb0e4c
console.log(hash.digest('hex'));
