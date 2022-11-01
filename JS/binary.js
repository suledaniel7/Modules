function addition(n1, n2) {//both strings
    let c1 = conversion(n1);
    let c2 = conversion(n2);

    let val = c1 + c2;

    return reverseConversion(val.toString());
}

function subtraction(n1, n2) {//both strings
    let c1 = conversion(n1);
    let c2 = conversion(n2);

    let val = c1 - c2;

    return reverseConversion(val.toString());
}

function conversion(number_str) {
    //from binary to decimal
    let lt = number_str.length;
    let n_arr = number_str.split('').reverse();
    let c_val = 0;
    for (let i = 0; i < lt; i++) {
        c_val += (parseInt(n_arr[i]) * (2 ** i));
    }

    return c_val;
}

function reverseConversion(number) {
    //from decimal to binary
    number = parseInt(number);
    let innerVal = number;
    let final_arr = [];

    while (innerVal != 0) {
        final_arr.push(innerVal % 2);
        innerVal = Math.floor(innerVal / 2);
        if (innerVal < 2) {
            innerVal = 0;
            final_arr.push(1);
        }
    }

    final_arr.reverse();
    return parseInt(final_arr.join(''));
}

// console.log(addition('100001', '101111'))
console.log(subtraction('101001', '1011001'))