const fs = require('fs');
fs.appendFileSync('style.css', fs.readFileSync('exp.css'));
console.log('ok');
