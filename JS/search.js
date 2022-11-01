function localSearch(pool, term){
    let rIndices = [];

    pool.forEach((item, i)=>{
        if(RegExp(term).test(item.toLowerCase())){
            rIndices.push(i);
        }
    });

    return rIndices;
}

module.exports = localSearch;