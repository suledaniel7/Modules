let wsp = /^\s*$/;
let email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let phone = /^\+{1}(\d){13,14}$|^(\d){11}$/;
let password;
let username = /(^[^a-zA-Z_]{1}.)|\W/;
let o_url = /(^[\w@:%\+~#=]+\.([\w()]+\.?)*[\w()@:%\/\+~#\?&=]*$)|(^(\w+\:\/\/){1}[\w@:%\+~#=]+\.([\w()]+\.?)*[\w()@:%\/\+~#\?&=]*$)/;
let urp = /(https?:\/\/(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?:\/\/(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})/;
let all_urls = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
let lsp = /^\s+/; //leading space pattern
let tsp = /\s+$/; //trailing space pattern
/*
    let l_pat = /[a-zA-Z]/;
    let d_pat = /\d/;
    let c_pat = /\W|_/;
    length: 8 or greater
*/