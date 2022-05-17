const fs = require("fs");
const path = require('path');
const { stdin, stdout,exit } = process;

stdout.write('Enter text please\n')

const x =fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdin.on( 'data', data =>{
    fs.open(path.join(__dirname, 'text.txt'), (err) => {
    });
  const dataString = data.toString().toLowerCase().trim();
    if(dataString == "exit"){
        process.exit()
    }else
fs.appendFile(path.join(__dirname, 'text.txt'), `${data}`, (err) => {
}
)})


process.on('exit', function (){
    console.log(`See you again`);
})
process.on('SIGINT', process.exit);