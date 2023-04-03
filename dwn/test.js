/*
async function asd(a, b) {
    console.log(a**b**b**b);
    console.log(2);
    setTimeout(() => console.log("N"), 1000);
}

async function abc() {
    console.log(1);
    await asd(5,2);
    console.log(2);
}
let promise = abc();
promise.then(console.log(11));
console.log(10);


*/


let arr = [
    "asd.png",
    "asd.ong",
    "asd.opg",
    "asd.png",
    "asg.svg",
    "asd.pfgg",
    "asd.dfg",
    "asc.svg"
]

const newArr = arr.filter(item => item.split(".")[1] === "svg");
console.log(newArr);
// console.log("asd.dsa".split("."));
// console.log(arr[0]);













