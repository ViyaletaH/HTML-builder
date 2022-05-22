const path = require('path');
const fs = require('fs');

const read = fs.createReadStream(__dirname + '/text.txt', 'utf8');

read.on('data', function(chunk) {
    console.log(chunk);
})

