const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'),{ withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (file.isFile()){
        let fFolder = path.join(__dirname, 'secret-folder', file.name);
        fs.stat(fFolder, (err, stats) => {
          if (err) console.log('Error: ', err.message);
          let name = file.name.split('.')[0];
          let ext = file.name.split('.')[1];
          let size = stats.size;
          console.log(name + ' - ' + ext + ' - ' + size+' bytes');
        });
      }
    });
  }
});
