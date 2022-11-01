function adjust(price_str) {
    let price = parseFloat(price_str).toFixed(2);
    price_str = String(price);
    let point = price_str.indexOf('.');
    if (price_str.slice(point + 1) == '00') {
        price_str = price_str.slice(0, point);
        point = -1;
    }
    if (point === -1) {
        price_str = ceil(price_str);
    }
    else {
        let pre_str = price_str.slice(0, point);
        price_str = ceil(pre_str);
    }
    
    return(Number(price_str));
}

function ceil(price_str) {
    let last = price_str.length - 1;
    if (last > 0) {
        if (Number(price_str[last]) < 5 && Number(price_str[last]) > 0) {
            price_str = price_str.slice(0, last) + '5';
        }
        else if (Number(price_str[last]) > 5) {
            let inter = Number(price_str.slice(last - 1, last));
            inter++;
            if(inter === 10){
                let top_ind = price_str.length-1;
                let numsOfZeroes = 1;
                for(let i=price_str.length-2; i>-1; i--){
                    if(price_str[i] == '9'){
                        top_ind = i;
                        numsOfZeroes++;
                    }
                }
                if(top_ind !== 0){
                    let p_top = Number(price_str[top_ind-1]);console.log(numsOfZeroes)
                    p_top++;
                    price_str = price_str.slice(0, top_ind-1) + String(p_top);
                    for(let j=0; j<numsOfZeroes; j++){
                        price_str += '0';
                    }
                }
                else {
                    price_str = '1';
                    for(let j=0; j<numsOfZeroes; j++){
                        price_str += '0';
                    }
                }
            }
            else{
                price_str = price_str.slice(0, last - 1) + String(inter) + '0';
            }
        }
    }
    else {
        if(Number(price_str) < 5 && Number(price_str) > 0){
            price_str = '5';
        }
        else if(Number(price_str) > 5){
            price_str = '10';
        }
    }
    return price_str;
}

module.exports = adjust;