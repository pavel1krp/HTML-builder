const fs = require("fs");
const path = require('path');
const text =fs.createReadStream(path.join(__dirname, 'text.txt'), "utf8");
text.on("data", function(chunk){ 
    console.log(chunk);
});