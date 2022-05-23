const fs = require('fs');
const path = require('path');

const fsPromises = require('fs').promises;

fs.mkdir(path.join(__dirname, 'files-copy'),{ recursive: true }, (err) =>{
  if(err) throw err;
});

fs.readdir(path.join(__dirname, 'files-copy'), (err, files) => {
  if (err) throw err;
  for (const file of files) {
    fs.unlink(path.join(__dirname, 'files-copy', file), err => {
      if (err) throw err;
    });
  }
}
);

fs.readdir(path.join(__dirname, 'files'), (err, files) => {
  if(err) throw err;
  files.forEach( file => {
    fsPromises.copyFile(path.join(__dirname, 'files', file),path.join(__dirname, 'files-copy', file) )
      .then(function() {
        console.log('Done');
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
