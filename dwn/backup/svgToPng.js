const {convertFile} = require('convert-svg-to-png');
const fs = require('fs');

module.exports = function(dir) {
    // const pngDir = dir + "/png";
    // if(!fs.existsSync(pngDir)) {
    //     console.log("Creating png directory...");
    //     fs.mkdirSync(pngDir);
    // }
    console.log("Converting to png...");
    const fileNames = fs.readdirSync(dir);
    const svgFileNames = fileNames.filter(item => item.split(".")[1] === "svg");
    for (let file of svgFileNames) {
        (async () => {
            const inputFilePath = dir + "/" + file;
            const outputFilePath = await convertFile(inputFilePath);
            console.log(outputFilePath);
        })()
    }
    console.log("All svg images converted!");
    return fileNames;
}
