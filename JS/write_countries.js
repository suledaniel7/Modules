const fs = require('fs');

let d = new Date();
fs.readFile('./countries.json', (err, data)=>{
    let n_data = data.toString();
    n_data = JSON.parse(n_data);
    n_data.forEach((elem, i)=>{
        fs.appendFile('./countries.js', `"${elem.code}" : "${elem.name}",\n`, (err)=>{
            if(err){
                console.log(err);
            }
            else if(i === n_data.length-1) {
                let d1 = new Date();
                console.log(`Completed in ${d1-d}ms`);
            }
        })
    });
});