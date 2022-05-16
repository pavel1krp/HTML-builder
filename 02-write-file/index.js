const fs = require("fs");
const path = require('path');
const { stdin, stdout,exit } = process;

stdout.write('Enter text please\n')



stdin.on( 'data', data =>{
    dataString = data.toString();
    if(dataString == 'exit'){
        exit()
    }
fs.open(path.join(__dirname, 'text.txt'), (err) => {
        if(err) throw err;
    });
fs.appendFile(path.join(__dirname, 'text.txt'), `${data}`, (err) => {

}
)})


process.on('exit', function (){
    console.log(`See you again`);
})
