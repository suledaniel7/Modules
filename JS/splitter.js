// let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quisquam! Magni rem aliquid saepe, beatae, quas sed quidem aspernatur quia aperiam harum veritatis asperiores temporibus facere, atque cum animi cupiditate?`;
//guiding principles: Give a leeway of 30 characters. So, check for more than 30, but slice at 0.
//that way, we won't have less than 30 chars hidden.
function splitter(text, len, leeway) {
    let final_text = text;
    let tot = len+leeway;
    if (text.length > tot) {
        let pre_text = '';
        let t_item = text[len];
        let wsp = /\s/;

        if (wsp.test(t_item)) {
            pre_text = text.slice(0, len);
            pre_text += ` <span class="link-a" (click)="expandDetails();">Read More...</span>`;
        }
        else {
            pre_text = text.slice(0, len);
            let p_t_arr = pre_text.split('');
            p_t_arr.reverse();
            let rev_pre_text = p_t_arr.join('');
            let l_i = rev_pre_text.search(wsp);
            pre_text = pre_text.slice(0, len - l_i);
            pre_text += `<span class="link-a" (click)="expandDetails();">Read More...</span>`;
        }
        final_text = pre_text;
    }
    return final_text;
}

module.exports = splitter;