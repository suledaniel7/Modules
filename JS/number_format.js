function format(number_str){
    let p_index = number_str.indexOf('.');
    let end = '';
    if(p_index !== -1){
        end = number_str.slice(p_index+1);
        number_str = number_str.slice(0, p_index);
    }
    let indices = [];
    let lt = number_str.length;
    let fin_str = '';
    if(lt > 3){
        let end = false;
        let e_index = lt;
        while(!end){
            let tmp_str = number_str.slice(0, e_index);
            let tmp_index = mini_format(tmp_str);
            indices.push(tmp_index);
            let fin_str = tmp_str.slice(0, tmp_index);
            if(fin_str.length > 3){
                e_index = tmp_index;
            }
            else {
                end = true;
            }
        }
    }

    indices.reverse();
    let start_index = 0;
    for(let i=0; i<=indices.length; i++){
        fin_str += number_str.slice(start_index, indices[i]);
        start_index = indices[i];
        if(i !== indices.length){
            fin_str += ',';
        }
    }
    fin_str += end;
    
    return fin_str;

    function mini_format(num_str){
        let m_lt = num_str.length;
        return m_lt-3;
    }
}

module.exports = format;