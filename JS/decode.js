const fs = require('fs');

function decoder(encoded) {
    return new Promise((resolve, reject) => {
        let chars = [];
        let charTxt = '';
        let g_chars = [];
        let g_charTxt = '';

        fs.readFile(__dirname + `\\chars.txt`, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                charTxt += data.toString();

                chars = charTxt.split("");
                let tmp_chars = chars.slice(53);

                fs.readFile(__dirname + `\\global_chars.txt`, (err, g_data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        g_charTxt += g_data.toString();

                        g_chars = g_charTxt.split("");

                        let final_text = '';
                        let overlooks = [];

                        for (let i = 0; i < encoded.length; i += 3) {
                            let pos = encoded[i + 1];
                            if (pos === '1') {
                                let p_index = tmp_chars.indexOf(encoded[i]);
                                final_text += g_chars[p_index + 53];
                            }
                            else if (pos === '2') {
                                overlooks.push(true);
                            }
                            else {
                                let p_index = chars.indexOf(encoded[i]);
                                final_text += g_chars[p_index];
                            }
                        }
                        
                        resolve({ text: final_text, ignore: overlooks });
                        //for ignores, redo checked index because it won't replace missing char with anything
                    }
                });
            }
        });
    });
}

function verifier(encoded, plain) {
    return new Promise((resolve, reject) => {
        if (encoded.length % 3 !== 0) {
            resolve(false);
        }
        else {
            decoder(encoded).then((decoded) => {
                if (decoded.text === plain) {
                    resolve(true);
                }
                else if(decoded.text.length !== plain.length && decoded.text.length+decoded.ignore.length !== plain.length){
                    resolve(false);
                }
                else {
                    let valid = true;
                    let d_text = decoded.text;
                    let strike_count = decoded.ignore.length;
                    let j = 0;
                    for (let i = 0; i < plain.length; i++) {
                        let p_c = plain[i];
                        if (d_text[j]) {
                            if (p_c !== d_text[j]) {
                                if (strike_count > 0) {
                                    strike_count--;
                                    j--;
                                }
                                else {
                                    valid = false;
                                }
                            }
                        }
                        else if (strike_count > 0) {
                            strike_count--;
                            j--;
                        }
                        else {
                            valid = false;
                        }
                        j++;
                    }
                    resolve(valid);
                }
            }).catch(e => {
                reject(e);
            });
        }
    });
}
module.exports = verifier;