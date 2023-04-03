const https = require("https");
const fs = require("fs");
const svgToPng = require("./svgToPng");

const { argv } = process;
const [, , url, from, to, subjDir, date] = argv;

if (url === undefined) {
    console.log(`Argument ('url') is missing`);
    return;
}
if (from === undefined) {
    console.log(`Argument ('from') is missing`);
    return;
}
if (to === undefined) {
    console.log(`Argument ('to') is missing`);
    return;
}
if (subjDir === undefined) {
    console.log(`Argument ('subject') is missing`);
    return;
}
if (date === undefined) {
    console.log(`Argument ('date') is missing`);
    return;
}

if(!fs.existsSync(subjDir)) fs.mkdirSync(subjDir);

let dateDir = subjDir + "/" + date;
if(!fs.existsSync(dateDir)) fs.mkdirSync(dateDir);

let urlNorm;
for (let i = from; i <= to; i++) {
    let path = dateDir + "/img-" + i + ".svg";
    urlNorm = url + i;
    try {
        https.get(urlNorm, (res) => {
            const writeStream = fs.createWriteStream(path);
            res.pipe(writeStream);

            writeStream.on("finish", () => {
                // counter++;
                writeStream.close();
                console.log(`File number ${i} saved`);
            })
        });
    } catch (e) {
        console.log(`File num: ${i} error`);
    }
}
console.log(`Download finished`);

//node downSVG.js https://bbb.wspa.pl/bigbluebutton/presentation/e054ce7be5c75dd8062b1f761ef47e2a528e91d5-1679407207513/e054ce7be5c75dd8062b1f761ef47e2a528e91d5-1679407207513/2025ed8ce0db3aa1cf5fdd43b5ddd78671602126-1679408435202/svg/ 168 195 SysWbud 21.03

