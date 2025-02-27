const path = require('path');
const fs = require('fs').promises;

fs.writeFile(path.join('./text.txt'), '', function (err) {
    if (err) {
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

function reading() {read.question('Введите текст', (words) => {
    reply = ' ' + words;
    if (reply === undefined) {
        reply = ' ';
    } 
    else {
    if (reply.toLowerCase().trim() === 'exit') {
        read.close()
    } else {
        fs.writeFile('02-write-file/text.txt', reply);
        reading();
    }
    }})
    return reply;
};

read.on('close', function() {
    console.log(' До свидания');
    process.exit();
})

reading();

