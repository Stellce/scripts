const {argv} = process;
let [, , imgFolder] = argv;
!imgFolder? imgFolder = 'D:\\scripts\\dwn\\InzOprog\\21.03' : 0;

const fs = require('fs');
const comparePNGs = require('./comparePNGs');

const files = fs.readdirSync(imgFolder)
    .filter(value => value.split('.')[1] === 'png')
    .map(value => imgFolder + '\\' + value);

files.sort((a, b) => a - b);
console.log(files);
return;
for(let i = 0; i < files.length; i++) {
    for(let j = 0; j < i; j++) {
        console.log(`Comparing: ${files[i]} & ${files[j]}`);
        if(comparePNGs(files[i], files[j])) {
            fs.unlinkSync(files[j]);
            files.splice(j, 1);
            console.log(`Deleted file: ${files[j]}\t\t\t-+-`)
        }
    }
}
//node compare.js InzOprog/28.03/sauce
