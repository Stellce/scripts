let files = ["45", "5", "SD", "123", "111"];

// for(let i = 0; i < files.length; i++) {
//     for(let j = 0; j < i; j++) {
//         console.log(i, j);
//     }
// }

// files.splice(1, 1);
files.sort((a, b) => a - b);

console.log(files);
