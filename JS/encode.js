const fs = require('fs');

function encoder(plainText){
    return new Promise((resolve, reject)=>{
        let chars = [];
        let charTxt = '';
        let g_chars = [];
        let g_charTxt = '';
        let nums = [];
        let numTxt = '';
        
        fs.readFile(__dirname+`/chars.txt`, (err, data)=>{
            if(err){
                reject(err);
            }
            else {
                charTxt += data.toString();
                
                chars = charTxt.split("");
                
                fs.readFile(__dirname+`/global_chars.txt`, (err, g_data)=>{
                    if(err){
                        reject(err);
                    }
                    else {
                        g_charTxt += g_data.toString();
        
                        g_chars = g_charTxt.split("");
        
                        fs.readFile(__dirname+`/nums.txt`, (err, num_data)=>{
                            if(err){
                                reject(err);
                            }
                            else {
                                numTxt += num_data.toString();
        
                                nums = numTxt.split("");
                                
                                let final_text = '';

                                for(let i=0; i<plainText.length; i++){
                                    let c_char = plainText[i];
                                    let enc = '';
                                    if(g_chars.indexOf(c_char) === -1){
                                        enc = '_20';
                                    }
                                    else {
                                        let index = g_chars.indexOf(c_char);
                                        enc += chars[index];
                                        if(index > 51){
                                            enc += '1';
                                        }
                                        else {
                                            enc += '0';
                                        }
                                        enc += nums[index];
                                    }
                                    final_text += enc;
                                }

                                resolve(final_text);
                            }
                        });
                    }
                });
            }
        });
    });
}

// module.exports = encoder;
encoder("Daniel Sule").then((valid)=>{
    console.log(valid);
}).catch((e)=>{
    console.log(e);
});