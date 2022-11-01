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