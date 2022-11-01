let arr = [
    {
        name: "First",
        count: 8
    },
    {
        name: "Second",
        count: 5
    },
    {
        name: "Third",
        count: 6
    }
];

console.log(arr);

arr.sort((a, b)=>{
    return a.count - b.count;//ascending order
});

console.log(arr);

console.log('Sorting in alphabetical order');

arr.sort((a, b)=>{
    let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();

    if(fa < fb){
        return -1;
    }
    if(fa > fb){
        return 1;
    }

    return 0;
});