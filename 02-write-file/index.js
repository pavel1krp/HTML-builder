const fs = require('fs');
const path = require('path');
const { stdin, stdout} = process;

stdout.write('Enter text please\n');

fs.open(path.join(__dirname, 'text.txt'),'w', (err) => {
  if (err) console.log('Error: ', err.message);
});

stdin.on( 'data', data =>{ 
  const dataString = data.toString().toLowerCase().trim();
  if(dataString == 'exit'){
    process.exit();
  }else
    fs.appendFile(path.join(__dirname, 'text.txt'), `${data}`, (err) => {
      if (err) console.log('Error: ', err.message);
    }
    );});

process.on('exit', function (){
  console.log('See you again');
});
process.on('SIGINT', process.exit);
