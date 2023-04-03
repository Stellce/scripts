const fs = require('fs');
const {convert} = require('convert-svg-to-png');

const dirPath = __dirname + "/SysWbud/21.03";
let fileNames;
function getFileNames() {
    fs.readdir(dirPath, (err, files) => {
        fileNames = files;
        continueE();
        console.log(4);
    });
}
console.log(5);
getFileNames();

function continueE(){
    for (let fileName of fileNames) {
        console.log(fileName);
    }
}
//
// for (let fileName of fileNames) {
//     const fileStream = fs.createReadStream(fileName);
//
//     console.dir(convert);
//
//     const filePng = convert(fileStream).then(value => console.log(value));
//
//     const filePngStream = fs.createWriteStream(dirPath + "/" + fileName + ".png");
//     // console.log(filePng);
// }


