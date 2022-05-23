const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname,'styles'),{ withFileTypes: true }, (err, files) =>{
    if (err) throw err;

    const streamWrite = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

    files.forEach(file => {
        if(file.isFile() && file.name.split('.')[1] == 'css'){
            const streamRead = fs.createReadStream(path.join(__dirname, 'styles', file.name), 'utf-8');
            let data = '';
            streamRead.on('data', chunk => {
            data += chunk
            streamWrite.write(data + '\n')})
        }
    });
});

    