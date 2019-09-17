const crypto = require('crypto');

const password = 'password1';
const salt = crypto.randomBytes(256).toString('hex');
console.log(salt);

const hashedPwd = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');

console.log(hashedPwd.toString('hex'));
