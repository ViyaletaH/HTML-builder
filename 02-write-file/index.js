const path = require('path');
const fs = require('fs').promises;

fs.writeFile( path.join('./text.txt'), '', function(err) {
    if(err) {
        throw err
    }
}); 

async function change(loc, dest) {
    try {
      await fs.rename(loc, dest)
    } catch (error) {
        throw error
    }
}

change('text.txt', '02-write-file/text.txt');

const readline = require('readline');
const read = readline.createInterface(process.stdin, process.stdout);
let reply;

read.question('Введите текст', (words) => {
    reply = words;
    if (reply.toLowerCase().trim() === 'exit') {
        read.close()
    } else {
        // console.log('kiss me goodbye')
        fs.writeFile('02-write-file/text.txt', reply)
    }
})

