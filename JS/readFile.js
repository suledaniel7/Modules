const fs = require('fs');
const path = require('path');

function readFile(fPath){
    return new Promise((resolve, reject)=>{
        fs.readFile(path.join(__dirname, fPath), (err, data)=>{
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

module.exports = readFile;