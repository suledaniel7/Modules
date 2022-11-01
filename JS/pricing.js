function adjust_price(c_price) {
    c_price = parseFloat(c_price);
    let final_price = c_price;
    let local_trans = 1.5;
    let addition = 0;
    if (c_price < 2500) {
        addition = (local_trans / 100) * c_price;
        addition = rounder(addition);
        final_price += addition;
    }
    else if (c_price >= 2500) {
        addition = (local_trans / 100) * c_price;
        addition = rounder(addition)
        if (addition > 2000) {
            addition = 2000;
            final_price += addition;
        }
        else {
            addition += 100;
            final_price += addition;
        }
    }
    
    return { price: final_price, charges: addition };
}

function rounder(num) {
    num = parseFloat(num).toFixed(4);
    let num_string = num.toString();
    num_string = num_string.slice(0, num_string.length - 1);
    let last = num_string.length - 1;
    let l_num = num_string[last];
    let final_num = '';
    if (parseInt(l_num) >= 5) {
        let new_num_string = num_string.slice(0, last - 1);
        let new_last = parseInt(num_string[last - 1]);
        new_last++;
        new_num_string += new_last.toString();
        num = parseFloat(new_num_string);
    }
    else {
        let new_num_string = num_string.slice(0, last);
        num = parseFloat(new_num_string);
    }
    // //round up floating points
    
    num = String(num);
    let index = num.indexOf('.');
    if(index !== -1){
        if(num.slice(index+1) !== "00"){
            let part_num = num.slice(0, index-1);
            let r_int = parseInt(num[index-1]);
            final_num = part_num + String(++r_int) + ".00";
        }
        else {
            final_num = num;
        }
    }
    else {
        final_num = num + '.00';
    }
    // round up number
    let length = final_num.length;
    let point = final_num.indexOf('.');
    if(point === -1){
        if(length < 2){
            //single digit or zero
            if(final_num[0]){
                if(parseInt(final_num[0]) === 0){
                    final_num = '0.00';
                }
                else if(parseInt(final_num[0]) <= 5){
                    final_num = '5.00';
                }
                else {
                    final_num = '10.00';
                }
            }
            else {
                final_num = '0.00';
            }
        }
        else {
            let pre_end = parseInt(final_num[length-1]);
            let pre_pre_end = parseInt(final_num[length-2]);
            let pre_num = final_num.slice(0, length-1);
            if(pre_end === 0){
                pre_num += '0.00';
            }
            else if(pre_end <= 5){
                pre_num += '5.00';
            }
            else {
                pre_num = pre_num.slice(0, pre_num.length-1);
                pre_num += String(++pre_pre_end) + '0.00';
            }
            final_num = pre_num;
        }
    }
    else if(point === 1){
        //single digit or zero
        if(final_num[0]){
            if(parseInt(final_num[0]) === 0){
                final_num = '0.00';
            }
            else if(parseInt(final_num[0]) <= 5){
                final_num = '5.00';
            }
            else {
                final_num = '10.00';
            }
        }
        else {
            final_num = '0.00';
        }
    }
    else {
        let pre_point = parseInt(final_num[point-1]);
        let pre_pre_point = parseInt(final_num[point-2]);
        let pre_num = final_num.slice(0, point-1);
        if(pre_point === 0){
            pre_num += '0.00';
        }
        else if(pre_point <= 5){
            pre_num += '5.00';
        }
        else {
            pre_num = pre_num.slice(0, pre_num.length-1);
            pre_num += String(++pre_pre_point) + '0.00';
        }
        final_num = pre_num;
    }
    return parseFloat(num);
}

module.exports = adjust_price;