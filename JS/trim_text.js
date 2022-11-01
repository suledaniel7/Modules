function trimText(text) {
    const lsp = /^\s+/;
    const tsp = /\s+$/;

    let s1 = text.replace(lsp, '');
    let s2 = s1.replace(tsp, '');

    return s2;
}

module.exports = trimText;